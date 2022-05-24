import { FileDescriptor } from './types';
import { writeFile } from './file';
import { flatten } from './utility';

/**
 * Formats an object containing key/value token pairs as a single string containing
 * the formatted values ready to be written to a CSV file, including line breaks
 *
 * @param items - The object containing the key/value pairs
 * @param prefix - The prefix to be appended to each key on export
 * @param separator - The separator between the prefix and key
 * @returns A string with line breaks which contains all formatted key/value pairs
 */
const formatTokensAsCSV = (
  items: Record<string, any>,
  prefix: string,
  separator: string
): string => {
  let CSV = '';
  Object.entries(items).forEach(([name, value]) => {
    name = `${prefix}${separator}${name}`;
    if (typeof value === 'string' && value.includes(',')) value = `""${value}""`;
    CSV += `${name},${value}\r\n`;
  });
  return CSV;
};

/**
 * Accepts an array of file descriptors generated by getFileDescriptors('path')
 * and writes their imported data to filesystem as a comma separated document (csv)
 * with header. Token files are combined into a single file, theme files are
 * written separately.
 *
 * @param fileDescriptors - An array of fileDescriptors generated by getFileDescriptors
 * @param outPath - The output path for the CSV file(s)
 */
export const exportCsv = (fileDescriptors: FileDescriptor[], outPath: string): number => {
  let tokenItems = {};
  let filename = '';
  let tokenOutput = 'key,value\r\n';

  fileDescriptors.forEach((file) => {
    const importedModule = require(`${file.moduleImportName}`);
    let output = `key,value\r\n`;
    const sep = file.baseName.includes('components') ? '' : '-';

    if (file.parentDirectoryName.includes('tokens')) {
      filename = `${outPath}/cmsds.tokens.csv`;
      const tokens = importedModule.default;

      tokenOutput += formatTokensAsCSV(tokens, file.baseName, sep);
    } else {
      filename = `${outPath}/${file.baseName}-theme.csv`;

      Object.entries(importedModule.default).forEach(([section]) => {
        tokenItems = flatten(importedModule.default[section]);
        output += formatTokensAsCSV(tokenItems, section, sep);
      });

      writeFile(filename, output);
    }
  });

  if (fileDescriptors[0].parentDirectoryName.includes('tokens')) {
    writeFile(filename, tokenOutput);
  }

  return 0;
};

export default exportCsv;
