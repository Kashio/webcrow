export default instance => {
  const resource = instance.$resource('project');

  const create = id => resource.save(id);

  const remove = id => {
    return resource.delete({
      projectId: id
    });
  };

  return {create, remove};
};
