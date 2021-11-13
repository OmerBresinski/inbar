import React from "react";
import * as S from "./style";

const Text = ({ size = "24px", bold = false, children, color = "#0D0C22", hoverColor, lineHeight, bolder = false }) => {
    return (
        <S.Text size={size} bold={bold} color={color} hoverColor={hoverColor} lineHeight={lineHeight} bolder={bolder}>
            {children}
        </S.Text>
    );
};

export default Text;
