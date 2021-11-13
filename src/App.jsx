import { useState, useEffect, useRef, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./features/AppHeader";
import AppContent from "./features/AppContent";
import * as S from "./style";

export const AppContext = createContext();

const App = () => {
    const appRef = useRef(null);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        appRef.current && setHasLoaded(true);
    }, [appRef.current]);

    return (
        <BrowserRouter>
            <S.App ref={appRef}>
                <AppContext.Provider value={appRef.current}>
                    {hasLoaded && (
                        <>
                            <AppHeader />
                            <AppContent />
                        </>
                    )}
                </AppContext.Provider>
            </S.App>
        </BrowserRouter>
    );
};

export default App;
