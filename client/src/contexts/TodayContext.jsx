import React, { createContext, useState } from "react";

export const TodayContext = createContext();

export const TodayProvider = ({ children }) => {
  const [today, setToday] = useState(new Date());

  return (
    <TodayContext.Provider value={{ today, setToday }}>
      {children}
    </TodayContext.Provider>
  );
};
