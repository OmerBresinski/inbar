import React from "react";
import Image from "../../components/Image";
import Avatar from "../../components/Avatar";
import Text from "../../components/Text";
import * as S from "./style";

const AppHeader = () => {
    return (
        <S.AppHeader>
            <S.Info>
                <S.AvatarWrapper>
                    <Avatar />
                </S.AvatarWrapper>
                <S.SubTitle>
                    <Text size="24px" bold>
                        Inbar Even Zur
                    </Text>
                </S.SubTitle>
                <S.Title>
                    <Text size="40px" bolder lineHeight={1.45}>
                        I design thoughtful digital experiences which are simple and enjoyable
                    </Text>
                </S.Title>
            </S.Info>
            <S.Cover>
                <Image src={COVER_SRC} alt="cover" height="100%" />
            </S.Cover>
        </S.AppHeader>
    );
};

const COVER_SRC = "https://inbar-portfolio.fra1.digitaloceanspaces.com/Projects/mergestories/cover.png";

export default AppHeader;
