/**
 * Make a unique file name for the CV file to avoid collisions
 */
export function makeCvFileName(file: File) {
  const fileName = `${Date.now()}_${file.name}`;
  return fileName;
}

/**
 * Get the name of the CV file without the timestamp
 */
export function getCvFileName(fileName: string) {
  return fileName.substring(fileName.indexOf("_") + 1);
}
