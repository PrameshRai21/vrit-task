// import { create } from 'zustand';
// import type { UserTypes } from '../types/users';
// import type { PostTypes, NewPostTypes } from '../types/posts';

// interface DashboardStoreTypes{
//     users: UserTypes[],
//     setUsers: (users: UserTypes[]) => void;
//     posts: PostTypes[],
//     setPosts: (posts: PostTypes[]) => void;
//     addNewPost: (post: NewPostTypes, userId: number) => void;
//     searchQuery: string;
//     setSearchQuery: (query: string) => void;
//     filteredUser: () => UserTypes[];
// }

// const useDashboardStore = create<DashboardStoreTypes>((set, get) => ({
//     users: [],
//     posts: [],
//     searchQuery: "",

//     setUsers: (users) => set({ users }),

//     setPosts: (posts) => set({setPosts(posts) {
//         ,
//         addNewPost: (newPost, userId) => {
//              const post: Post = {
//       id: Date.now(),
//       userId,
//       title: newPost.title,
//       body: newPost.body,
//     };
//     // Persist locally
//     const stored: Post[] = JSON.parse(
//       localStorage.getItem("localPosts") || "[]"
//     );
//     localStorage.setItem("localPosts", JSON.stringify([post, ...stored]));
//     set((state) => ({ posts: [post, ...state.posts] }));
//         },

//         setSearchQuery: (searchQuery) => set({ searchQuery }),

//   filteredUsers: () => {
//     const { users, searchQuery } = get();
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return users;
//     return users.filter(
//       (u) =>
//         u.name.toLowerCase().includes(q) ||
//         u.email.toLowerCase().includes(q)
//     );
//   },
//     },
// }));

import { create } from "zustand";
import type { UserTypes } from "../types/users";
import type { PostTypes, NewPostTypes } from "../types/posts";

interface DashboardStore {
  // Users
  users: UserTypes[];
  posts: PostTypes[];
  searchQuery: string;
  setUsers: (users: UserTypes[]) => void;
  setPosts: (posts: PostTypes[]) => void;
  addPost: (post: NewPostTypes, userId: number) => void;
  setSearchQuery: (query: string) => void;
  filteredUsers: () => UserTypes[];
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  users: [],
  posts: [],
  searchQuery: "",

  // user
  setUsers: (users) => set({ users }),

  //  Post
  setPosts: (posts) => set({ posts }),
  addPost: (newPost, userId) => {
    const post: PostTypes = {
      id: Date.now(),
      userId,
      title: newPost.title,
      body: newPost.body,
    };

    const stored: PostTypes[] = JSON.parse(
      localStorage.getItem("localPosts") || "[]",
    );
    localStorage.setItem("localPosts", JSON.stringify([post, ...stored]));
    set((state) => ({ posts: [post, ...state.posts] }));
  },

  // search
  setSearchQuery: (searchQuery) => set({ searchQuery }),

  //   filter
  filteredUsers: () => {
    const { users, searchQuery } = get();
    const q = searchQuery.toLowerCase().trim();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q),
    );
  },
}));
