import React from "react";
import Tab from "../Tab";
import * as S from "./style";

export const Tabs = () => {
    return (
        <S.Tabs>
            <Tab text="Projects" url="/" />
            <Tab text="About" url="/about" />
        </S.Tabs>
    );
};

export default Tabs;
