"use client";

import { createContext, useContext } from "react";

const GlobalContext = createContext(null);

export function GlobalProvider({ children, settings }) {
  return (
    <GlobalContext.Provider value={settings}>{children}</GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
