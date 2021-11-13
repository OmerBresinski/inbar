import React, { useState, useEffect, useRef } from "react";
import ImageSet from "../ImageSet";
import md5 from "md5";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import Text from "../Text";
import * as S from "./style";

const ImageItemDialog = ({ items, onClose, password, imagesToIgnore }) => {
    const contentRef = useRef();
    const [isAuthenticated, setIsAuthenticated] = useState(!password);
    const [opacity, setOpacity] = useState(0);
    const [passwordValue, setPasswordValue] = useState("");
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        displayDialog();
    }, []);

    const displayDialog = () => {
        setOpacity(1);
    };

    const handlePasswordChange = (e) => {
        setIsDirty(false);
        setPasswordValue(e.target.value);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        setIsAuthenticated(md5(passwordValue) === PASSWORD);
        setIsDirty(true);
    };

    return (
        <>
            <S.ImageItemDialog opacity={opacity} onClick={!isAuthenticated && onClose}>
                {isAuthenticated && (
                    <>
                        <S.DialogHeader onClick={onClose}>
                            <IoCloseSharp size="22px" />
                        </S.DialogHeader>
                        <S.DialogContent ref={contentRef} blurred={!isAuthenticated}>
                            {items.map(({ mainTitle, subTitle, images, description }, index) => (
                                <ImageSet
                                    key={index}
                                    images={images}
                                    mainTitle={mainTitle}
                                    subTitle={subTitle}
                                    description={description}
                                    blurred={!isAuthenticated}
                                    imagesToIgnore={imagesToIgnore}
                                />
                            ))}
                        </S.DialogContent>
                    </>
                )}
                {!isAuthenticated && (
                    <S.PasswordInputWrapper>
                        <S.PasswordDialog onClick={(e) => e.stopPropagation()}>
                            <S.PasswordHeaderWrapper>
                                <Text bold size="20px" color="#5E5C5C">
                                    Enter Password
                                </Text>
                            </S.PasswordHeaderWrapper>
                            <S.PasswordInput onSubmit={handlePasswordSubmit}>
                                <S.Input autoFocus onChange={handlePasswordChange} type="password" value={passwordValue} />
                                <S.Button>
                                    <IoIosArrowRoundForward size="32px" color="#fff" />
                                </S.Button>
                            </S.PasswordInput>
                            {!isAuthenticated && isDirty && (
                                <S.Error>
                                    <Text color="red" size="14px">
                                        Wrong Password
                                    </Text>
                                </S.Error>
                            )}
                        </S.PasswordDialog>
                    </S.PasswordInputWrapper>
                )}
            </S.ImageItemDialog>
        </>
    );
};

export default ImageItemDialog;

const PASSWORD = "680572493344e05f9952226c38e9e275";
