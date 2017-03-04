export default instance => {
  const resource = instance.$resource('entries');

  const get = entryPath => {
    return resource.get({
      entryPath
    });
  };

  return { get };
};
