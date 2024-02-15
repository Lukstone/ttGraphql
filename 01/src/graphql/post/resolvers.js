const post = () => {
  return {
    id: '1',
    title: 'post1',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'post1',
    },
    {
      id: '2',
      title: 'post2',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
