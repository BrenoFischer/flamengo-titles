import { ReactNode, createContext, useState } from 'react'

interface LanguageContextType {
  activeLanguage: string
  changeActiveLanguage: (newLanguage: string) => void
}

export const LanguageContext = createContext({} as LanguageContextType)

interface LanguageContextProviderProps {
  children: ReactNode
}

export function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [activeLanguage, setActiveLanguage] = useState('PT')

  function changeActiveLanguage(newLanguage: string) {
    if (newLanguage !== activeLanguage) setActiveLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ activeLanguage, changeActiveLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
