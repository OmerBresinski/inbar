import React from "react";
import Text from "../Text";
import * as S from "./style";

const Chip = ({ text }) => {
    return (
        <S.Chip>
            <Text color="black" size="12px" lineHeight="12px">
                {text}
            </Text>
        </S.Chip>
    );
};

export default Chip;
