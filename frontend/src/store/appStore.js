import { create } from "zustand";
import { getUsers, getPosts, getComments } from "../../services/api";

const useAppStore = create((set) => ({
  users: [],
  posts: [],
  comments: [],

  fetchUsers: async () => {
    try {
      const userList = await getUsers();
      set({ users: userList });
    } catch (error) {
      console.error("Failed to load users:", error);
    }
  },

  fetchPosts: async () => {
    try {
      const postList = await getPosts();
      set({ posts: postList });
    } catch (error) {
      console.error("Failed to load posts:", error);
    }
  },

  fetchComments: async () => {
    try {
      const commentList = await getComments();
      set({ comments: commentList });
    } catch (error) {
      console.error("Failed to load comments:", error);
    }
  },
}));

export default useAppStore;