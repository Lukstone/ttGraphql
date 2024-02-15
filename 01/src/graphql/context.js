export const context = () => {
  return {
    getUsers: (path = '/') => fetch('http://localhost:3001/users' + path),
  };
};
