import React from "react";
import * as S from "./style";

const Image = ({ src, height = "auto", width = "auto", alt = "", radius, url }) => {
    const isPokerHeat = src.includes("pokerheat");

    const handleClick = () => {
        window.location = url;
    };

    return (
        <S.Image
            src={src}
            alt={alt}
            height={isPokerHeat && !height ? "555px" : height}
            width={isPokerHeat && !width ? "987px" : width}
            radius={radius}
            onClick={url && handleClick}
        />
    );
};

export default Image;
