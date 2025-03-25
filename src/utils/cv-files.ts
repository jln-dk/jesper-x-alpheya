/**
 * Make a unique file name for the CV file to avoid collisions
 */
export const makeCvFileName = (file: File) => {
  const fileName = `${Date.now()}_${file.name}`;
  return fileName;
};

/**
 * Get the name of the CV file without the timestamp
 */
export const getCvFileName = (fileName: string) => {
  return fileName.substring(fileName.indexOf("_") + 1);
};
