import React, { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(null)

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => useContext(LangContext)
