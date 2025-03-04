import { FileDescriptor } from './types';
import { writeFile } from './utility';

/*
 * Accepts an array of file descriptors generated by getFileDescriptors('path')
 * and writes their imported data to filesystem as a JSON file
 */
export const exportJson = (fileDescriptors: FileDescriptor[], outPath: string): number => {
  let filename = '';
  let isTheme = false;
  const tokenOutput: string | any = {};

  fileDescriptors.forEach((file) => {
    /*
     * doing this asynchronously with import() makes this code needlessly complex
     * so ignoring this particular linting error here to allow named require.
     * which runs synchronously.
     */
    const importedModule = require(file.moduleImportName);

    tokenOutput[file.fileBaseName] = {
      ...importedModule.default,
    };

    // theme files have a description prop token files do not
    if (importedModule.default.description !== undefined) {
      isTheme = true;
      tokenOutput[`${file.fileBaseName}`].tokenType = 'theme';
      filename = `${outPath}/${file.parentDirectoryName}-${file.fileBaseName}.tokens.json`;
      writeFile(filename, JSON.stringify(tokenOutput[file.fileBaseName], null, 4));
    } else {
      // it's a token file
      tokenOutput.tokenType = 'tokens';
      filename = `${outPath}/cmsds.tokens.json`;
    }
  });
  if (!isTheme) writeFile(filename, JSON.stringify(tokenOutput, null, 4));
  return 0;
};

export default exportJson;
