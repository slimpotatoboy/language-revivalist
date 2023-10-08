"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ID, Query, database } from "../services/api";

export const PAGES_DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE;
export const PAGES_COLLECTION_ID =
  process.env.NEXT_PUBLIC_COLLECTION_DICTIONARY;

const DictionaryContext = createContext();

export function useDictionary() {
  return useContext(DictionaryContext);
}

export function DictionaryProvider(props) {
  const [dictionary, setDictionary] = useState([]);

  // async function add(page) {
  //   const response = await database.createDocument(
  //     PAGES_DATABASE_ID,
  //     PAGES_COLLECTION_ID,
  //     ID.unique(),
  //     page
  //     //   [
  //     //     Permission.read(Role.user(userId)),
  //     //     Permission.update(Role.user(userId)),
  //     //     Permission.delete(Role.user(userId)),
  //     //   ]
  //   );
  //   setPost((pages) => [response.$id, ...pages]);
  //   // return response;
  // }

  // async function remove(id) {
  //   await database.deleteDocument(PAGES_DATABASE_ID, PAGES_COLLECTION_ID, id);
  //   setPages((pages) => pages.filter((page) => page.$id !== id));
  //   await init(); // Refetch ideas to ensure we have 10 items
  // }

  // async function get(hostname) {
  //   const response = await database.listDocuments(
  //     PAGES_DATABASE_ID,
  //     PAGES_COLLECTION_ID,
  //     [Query.limit(1), Query.equal("username", hostname)]
  //   );
  //   if (response.documents.length > 0) {
  //     setPages(response.documents);
  //   }
  //   return response.documents;
  // }

  async function list() {
    const response = await database.listDocuments(
      PAGES_DATABASE_ID,
      PAGES_COLLECTION_ID,
      [Query.orderAsc("$createdAt"), Query.limit(50)]
    );
    setDictionary(response.documents);
  }

  // useEffect(() => {
  //   list();
  // }, []);

  return (
    <DictionaryContext.Provider
      value={{
        current: dictionary,
        // add,
        // get,
        // remove,
        list,
      }}
    >
      {props.children}
    </DictionaryContext.Provider>
  );
}
