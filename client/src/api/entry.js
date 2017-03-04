export default instance => {
  const resource = instance.$resource('entry');

  const create = path => resource.save(path);

  const remove = entryPath => {
    return resource.delete({
      entryPath
    });
  };

  return { create, remove };
};
