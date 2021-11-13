import React from "react";
import Text from "../Text";
import { Link } from "react-router-dom";
import { useTab } from "./hooks";
import * as S from "./style";

const Tab = ({ text, url }) => {
    const { isActive } = useTab(url);

    return (
        <S.Tab>
            <Link to={url}>
                <Text size="17px" bold color={isActive ? PRIMARY_COLOR : SECONDARY_COLOR}>
                    {text}
                </Text>
            </Link>
        </S.Tab>
    );
};

const PRIMARY_COLOR = "#0d0c22";
const SECONDARY_COLOR = "#b9b8cd";

export default Tab;
