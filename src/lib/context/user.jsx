"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ID, account } from "../services/api";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  // login function
  async function login(email, password) {
    const loggedIn = await account.createEmailSession(email, password);
    setUser(loggedIn);
    localStorage.setItem("token", loggedIn.$id);
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(email, password, name) {
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {props.children}
    </UserContext.Provider>
  );
}
