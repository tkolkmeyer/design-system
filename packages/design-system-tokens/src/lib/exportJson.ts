import { FileDescriptor } from './types';
import { writeFile } from './file';

/**
 * Accepts an array of file descriptors generated by getFileDescriptors('path')
 * and writes their imported data to filesystem as a JSON file.
 * Token files are combined into a single file, theme files are written separately.
 *
 * @param fileDescriptors - An array of fileDescriptors generated by getFileDescriptors
 * @param outPath - The output path for the CSV file(s)
 */
export const exportJson = (fileDescriptors: FileDescriptor[], outPath: string): number => {
  let filename = '';
  const tokenOutput: string | any = {};

  fileDescriptors.forEach((file) => {
    const importedModule = require(file.moduleImportName);

    tokenOutput[file.baseName] = {
      ...importedModule.default,
    };

    if (file.parentDirectoryName.includes('tokens')) {
      // it's a token file
      tokenOutput.tokenType = 'tokens';
      filename = `${outPath}/cmsds.tokens.json`;
    } else {
      // it's a theme file
      tokenOutput[`${file.baseName}`].tokenType = 'theme';
      filename = `${outPath}/${file.parentDirectoryName}-${file.baseName}.tokens.json`;
      writeFile(filename, JSON.stringify(tokenOutput[file.baseName], null, 4));
    }
  });

  // tokens are written to a single file
  if (fileDescriptors[0].parentDirectoryName.includes('tokens')) {
    writeFile(filename, JSON.stringify(tokenOutput, null, 4));
  }

  return 0;
};

export default exportJson;
