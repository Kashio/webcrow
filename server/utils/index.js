export default {
  isEntryInsideWebCrowHome: entryPath => {
    return entryPath.startsWith(process.env.WEBCROW_HOME);
  }
};
