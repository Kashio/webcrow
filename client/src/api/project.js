export default instance => {
  const resource = instance.$resource('project');

  const create = id => resource.save(id);

  return { create };
};
