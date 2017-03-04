export default instance => {
  const resource = instance.$resource('projects');

  const get = () => resource.get();

  return { get };
};
