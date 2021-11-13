import React, { useState, useContext } from "react";
import Video from "../Video";
import Image from "../Image";
import Text from "../Text";
import ImageItemDialog from "../ImageItemDialog";
import { AppContext } from "../../App";
import * as S from "./style";

const ImageItem = ({ itemSet, withPassword, width = "100%", height, imagesToIgnore }) => {
    const appRef = useContext(AppContext);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const firstImage = itemSet[0]?.images[0];

    const handleImageClick = () => {
        setIsDialogOpen(true);
        if (appRef) {
            setTimeout(() => (appRef.style.overflow = "hidden"), 150);
        }
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
        if (appRef) {
            appRef.style.overflow = "overlay";
        }
    };

    return (
        <>
            <S.Image>
                {firstImage.includes(".mp4") ? (
                    <>
                        <Video src={firstImage} />
                        <S.Info onClick={handleImageClick}>
                            <Text size="16px" color="#fff" bold>
                                Dog company: Web design
                            </Text>
                        </S.Info>
                    </>
                ) : (
                    <>
                        <Image width={width} height={height} src={firstImage} radius="8px" />
                        <S.Info onClick={handleImageClick}>
                            <Text size="15px" color="#fff" bold>
                                Dog company: Web design
                            </Text>
                        </S.Info>
                    </>
                )}
            </S.Image>
            {isDialogOpen && <ImageItemDialog items={itemSet} onClose={handleDialogClose} password={withPassword} imagesToIgnore={imagesToIgnore} />}
        </>
    );
};

export default ImageItem;
