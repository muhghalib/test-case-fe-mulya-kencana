"use client";

import { createContext, use, useState } from "react";

const MainSidebarContext = createContext<{
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
} | null>(null);

export const MainSidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainSidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MainSidebarContext.Provider>
  );
};

export const useMainSidebar = () => {
  const mainSidebarContext = use(MainSidebarContext);

  if (!mainSidebarContext) {
    throw new Error("useMainSidebar must be wrapped inside MainSidebarProvider.");
  }

  return mainSidebarContext;
};
