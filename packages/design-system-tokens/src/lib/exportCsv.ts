import { FileDescriptor } from './types';
import { writeFile } from './utility';

const tokenFormat = (tokenType: string, name: string, value: string | unknown) => {
  return `${tokenType},${name},${value}\r\n`;
};

/*
 * Accepts an array of file descriptors generated by getFileDescriptors('path')
 * and writes their imported data to filesystem as a comma separated document (csv)
 * with headers
 */
export const exportCsv = (fileDescriptors: FileDescriptor[], outPath: string): number => {
  fileDescriptors.forEach((file) => {
    /*
     * doing this asynchronously with import() makes this code needlessly complex
     * so ignoring this particular linting error here to allow named require.
     * which runs synchronously.
     */
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const importedModule = require(`${file.moduleImportName}`);

    // theme files have a description prop token files do not
    if (importedModule.default.description !== undefined) {
      Object.keys(importedModule.default).forEach((key) => {
        if (key === 'description') return;

        const filename = `${outPath}/${file.exportFileName}-${key}.csv`;

        // write header
        let vars = `theme,key,value\r\n`;

        Object.entries(importedModule.default[key]).forEach(([name, value]) => {
          vars += tokenFormat(file.fileBaseName, name, value);
        });

        writeFile(filename, vars);
      });
    } else {
      // it's a token file
      const filename = `${outPath}/${file.exportFileName}.csv`;

      // write header
      let vars = `type,key,value\r\n`;

      Object.entries(importedModule.default).forEach(([name, value]) => {
        vars += tokenFormat(file.fileBaseName, name, value);
      });

      writeFile(filename, vars);
    }
  });
  return 0;
};

export default exportCsv;
