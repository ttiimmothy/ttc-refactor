import React, { createContext, useContext, useState } from "react";

interface LanguageProviderProps {
  language: string | null | undefined;
  setLanguage: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}
export const LanguageContext = createContext<
  LanguageProviderProps | null | undefined
>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<string | null | undefined>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
