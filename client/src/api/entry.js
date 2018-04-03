export default instance => {
  const actions = {
    put: {
      method: 'PUT',
      url: 'entry',
      emulateJSON: true
    }
  };

  const resource = instance.$resource('entry', {}, actions);

  const create = path => resource.save({path});

  const remove = entryPath => resource.delete({entryPath});

  const rename = (entryPath, name) => resource.put({entryPath, name});

  return {create, remove, rename};
};
