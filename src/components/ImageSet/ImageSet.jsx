import React, { useState } from "react";
import Text from "../Text";
import Video from "../Video";
import Image from "../Image";
import RelatedImage from "../RelatedImage";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import * as S from "./style";

const ImageSet = ({ images, mainTitle, subTitle, description, blurred, imagesToIgnore }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const visibileImages = images.filter((image) => !imagesToIgnore?.includes(image));

    const handleRelatedImageClick = (index) => {
        setActiveImageIndex(index);
    };

    const handleNavigateNextClick = () => {
        setActiveImageIndex(activeImageIndex + 1);
    };

    const handleNavigatePreviousClick = () => {
        setActiveImageIndex(activeImageIndex - 1);
    };

    return (
        <S.ImageSet blurred={blurred}>
            {mainTitle && subTitle && (
                <S.Header>
                    <S.MainHeader>
                        <Text size="18px" bold>
                            {mainTitle}
                        </Text>
                    </S.MainHeader>
                    <S.SubHeader>
                        <Text size="16px">{subTitle}</Text>
                    </S.SubHeader>
                </S.Header>
            )}
            <S.ActiveImageWrapper>
                {visibileImages[activeImageIndex].includes(".mp4") ? (
                    <Video src={visibileImages[activeImageIndex]} width={"987px"} radius="8px" />
                ) : (
                    <Image src={visibileImages[activeImageIndex]} height={null} width={"987px"} radius="8px" />
                )}
                <S.ImageHandles>
                    <S.Navigator onClick={handleNavigatePreviousClick} isVisible={activeImageIndex !== 0}>
                        <MdOutlineKeyboardArrowLeft color="#5A5A5A" />
                    </S.Navigator>
                    <S.Navigator onClick={handleNavigateNextClick} isVisible={activeImageIndex !== visibileImages?.length - 1}>
                        <MdOutlineKeyboardArrowRight color="#5A5A5A" />
                    </S.Navigator>
                </S.ImageHandles>
            </S.ActiveImageWrapper>
            <S.RelatedImages>
                {visibileImages.map((image, index) => (
                    <RelatedImage key={index} image={image} activeImageIndex={activeImageIndex} onClick={handleRelatedImageClick} index={index} />
                ))}
            </S.RelatedImages>
            {description && (
                <S.Description>
                    <Text size="20px" lineHeight="1.9">
                        {description}
                    </Text>
                </S.Description>
            )}
        </S.ImageSet>
    );
};

export default ImageSet;
