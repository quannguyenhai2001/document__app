module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": filenames => {
    const escapedFileNames = filenames
      .map(name => name.replace(/\\/g, "\\/"))
      .join(" ");
    console.log({ escapedFileNames });

    return [`eslint --fix ${escapedFileNames}`, `git add ${escapedFileNames}`];
  },
  "src/**/*.{js,jsx,ts,tsx,scss,css}": filenames => {
    const escapedFileNames = filenames
      .map(name => name.replace(/\\/g, "/"))
      .join(" ");

    return [
      `prettier --write ${escapedFileNames}`,
      `git add ${escapedFileNames}`,
    ];
  },
};
