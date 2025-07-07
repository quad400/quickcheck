import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  isInit: boolean;
  setIsInit: (value: boolean) => void;
  mode: string;
  setMode: (value: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isInit, setIsInit] = useState<boolean>(false);
  const [mode, setMode] = useState("light");

  return (
    <AppContext.Provider value={{ isInit, setIsInit, mode, setMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }

  return context;
};
