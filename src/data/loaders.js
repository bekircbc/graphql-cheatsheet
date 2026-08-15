import DataLoader from 'dataloader';
import { postsData, usersData } from './mockData.js';

// Batch function to resolve posts for multiple user IDs in one pass
const batchPostsByUserId = async (userIds) => {
  return userIds.map((id) => postsData.filter((post) => post.userId === id));
};

// Batch function to resolve users by user IDs
const batchUsersById = async (userIds) => {
  return userIds.map((id) => usersData.find((user) => user.id === id));
};

export const createLoaders = () => ({
  userPostsLoader: new DataLoader(batchPostsByUserId),
  userLoader: new DataLoader(batchUsersById),
});