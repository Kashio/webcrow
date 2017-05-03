export default instance => {
  const resource = instance.$resource('entries');

  const get = entryPath => resource.get({ entryPath });

  return { get };
};
