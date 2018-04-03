const isEntryInsideWebCrowHome = entryPath => {
  return entryPath.startsWith(process.env.WEBCROW_HOME);
};

module.exports = {
  isEntryInsideWebCrowHome
};
