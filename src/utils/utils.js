export const exist = (option) => (options) => options.includes(option);

export const converter = (parseFunction) => (mimeType) => (str) => parseFunction(str, mimeType);
