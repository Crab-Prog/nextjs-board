'use client'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type sidebarContext = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
};

export const SidebarContext = createContext<sidebarContext>({} as sidebarContext);

export function SidebarContextProvider({children}: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{
      isOpen, setIsOpen
    }}>
      {children}
    </SidebarContext.Provider>
  );
}
export const useSidebarContext = () => useContext(SidebarContext);
