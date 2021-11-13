import styled from "styled-components";

export const Text = styled.div`
    display: flex;
    font-size: ${({ size }) => size};
    font-weight: ${({ bold }) => (bold ? "600" : "400")};
    font-weight: ${({ bolder }) => bolder && "700"};
    line-height: ${({ lineHeight }) => lineHeight};
    color: ${({ color }) => color};
    &:hover {
        color: ${({ hoverColor }) => hoverColor};
    }
`;
