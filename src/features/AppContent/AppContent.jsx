import React from "react";
import { Route, Routes } from "react-router-dom";
import Tabs from "../../components/Tabs";
import * as P from "../../pages";
import * as S from "./style";

const AppContent = () => {
    return (
        <S.AppContent>
            <Tabs />
            <Routes>
                <Route path="/" element={<P.Projects />} />
                <Route path="/about" element={<P.About />} />
            </Routes>
        </S.AppContent>
    );
};

export default AppContent;
