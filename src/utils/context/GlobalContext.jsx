import { createContext, useState, useEffect, useRef } from "react";

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState({
    isLoading: true,
    width: 0,
  });
  const [slideNo, setSlideNo] = useState(1);
  const [isFirstTime, setIsFirstTime] = useState(true);
  // const [slideNoForNavLink, setSlideNoForNavLink] = useState(0);
  const [translationWiseSlideNo, setTranslationWiseSlideNo] = useState({});
  const [currentTranslation, setCurrentTranslation] = useState(0);

  const horizontalSliderRef = useRef(null);
  // useEffect(() => {
  //   if (window.localStorage.getItem("isFirstTime")) {
  //     setIsFirstTime(false);
  //   } else {
  //     window.localStorage.setItem("isFirstTime", false);
  //   }
  // }, []);
  // useEffect(() => ({ slideNo }));
  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        isFirstTime,
        setIsFirstTime,
        slideNo,
        setSlideNo,
        translationWiseSlideNo,
        setTranslationWiseSlideNo,
        currentTranslation,
        setCurrentTranslation,
        horizontalSliderRef,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
