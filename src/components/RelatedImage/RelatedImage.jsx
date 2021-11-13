import React from "react";
import Video from "../Video";
import Image from "../Image";
import * as S from "./style";

const RelatedImage = ({ index, activeImageIndex, onClick, image }) => {
    const isVideo = image.includes(".mp4");
    const handleClick = () => {
        onClick(index);
    };

    return (
        <S.RelatedImage isVideo={isVideo} isSelected={index === activeImageIndex} onClick={handleClick}>
            {isVideo ? (
                <Video key={index} src={image} width="100%" radius="8px" isRelated />
            ) : (
                <Image key={index} src={image} height="100%" width="100%" radius="8px" ratio="auto 76 / 57" />
            )}
        </S.RelatedImage>
    );
};

export default RelatedImage;
