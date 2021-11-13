import React from "react";
import * as S from "./style";

const Video = ({ src, width, radius, isRelated }) => {
    return <S.Video radius={radius} width={width} autoPlay loop src={src} isRelated={isRelated}></S.Video>;
};

export default Video;
