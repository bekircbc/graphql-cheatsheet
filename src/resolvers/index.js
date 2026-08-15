import { usersData, postsData } from '../data/mockData.js';

export const resolvers = {
  Query: {
    users: () => usersData,
    user: (_, { id }, { loaders }) => loaders.userLoader.load(id),
    posts: () => postsData,
    post: (_, { id }) => postsData.find((post) => post.id === id),
    me: (_, __, context) => {
      if (!context.user) {
        throw new Error('Unauthorized');
      }
      return context.user;
    },
  },

  User: {
    posts: (parent, _, { loaders }) => loaders.userPostsLoader.load(parent.id),
  },

  Post: {
    author: (parent, _, { loaders }) => loaders.userLoader.load(parent.userId),
  },

  Mutation: {
    createPost: (_, { input }, context) => {
      if (!context.user) {
        throw new Error('Authentication required to create a post');
      }

      const newPost = {
        id: String(postsData.length + 101),
        title: input.title,
        content: input.content,
        userId: context.user.id,
      };
      postsData.push(newPost);
      return newPost;
    },
    deletePost: (_, { id }, context) => {
      if (!context.user) {
        throw new Error('Authentication required');
      }

      const index = postsData.findIndex((post) => post.id === id);
      if (index === -1) return false;
      postsData.splice(index, 1);
      return true;
    },
  },
};