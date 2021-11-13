import React from "react";
import * as S from "./style";

const Image = ({ src, height = "auto", width = "auto", alt = "", radius }) => {
    const isPokerHeat = src.includes("pokerheat");
    return (
        <S.Image
            src={src}
            alt={alt}
            height={isPokerHeat && !height ? "555px" : height}
            width={isPokerHeat && !width ? "987px" : width}
            radius={radius}
        />
    );
};

export default Image;
