import { createContext, useContext, useState } from "react";

export const AppStateContext = createContext();

export function AppProvider({ children }) {

  //const value = useState({});

  const [currentStep, setStep]= useState(1);
  const [userData, setUserData]= useState([]);
  const [finalData, setFinalData]= useState([]);

  return (
    <AppStateContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData}}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
}
