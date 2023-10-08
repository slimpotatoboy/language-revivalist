"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ID, Query, database } from "../services/api";

export const PAGES_DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE;
export const PAGES_COLLECTION_ID = process.env.NEXT_PUBLIC_COLLECTION_POST;

const PostContext = createContext();

export function usePost() {
  return useContext(PostContext);
}

export function PostProvider(props) {
  const [post, setPost] = useState([]);

  async function add(page) {
    const response = await database.createDocument(
      PAGES_DATABASE_ID,
      PAGES_COLLECTION_ID,
      ID.unique(),
      page
      //   [
      //     Permission.read(Role.user(userId)),
      //     Permission.update(Role.user(userId)),
      //     Permission.delete(Role.user(userId)),
      //   ]
    );
    setPost((pages) => [response.$id, ...pages]);
    // return response;
  }

  // async function remove(id) {
  //   await database.deleteDocument(PAGES_DATABASE_ID, PAGES_COLLECTION_ID, id);
  //   setPages((pages) => pages.filter((page) => page.$id !== id));
  //   await init(); // Refetch ideas to ensure we have 10 items
  // }

  async function get(id) {
    const response = await database.getDocument(
      PAGES_DATABASE_ID,
      PAGES_COLLECTION_ID,
      id
    );
    
    return response;
  }

  async function list() {
    const response = await database.listDocuments(
      PAGES_DATABASE_ID,
      PAGES_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(100)]
    );
    setPost(response.documents);
  }

  useEffect(() => {
    list();
  }, []);

  return (
    <PostContext.Provider
      value={{
        current: post,
        add,
        get,
        // remove,
        list,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
}
