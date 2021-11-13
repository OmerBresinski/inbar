import styled from "styled-components";

export const RelatedImage = styled.div`
    height: 60px;
    width: 80px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: ${({ isSelected }) => isSelected && "red 0px 0px 0px 2px"};
    box-sizing: border-box;
    &:hover {
        box-shadow: ${({ isSelected }) => (isSelected ? "red 0px 0px 0px 4px" : "rgb(0 0 0 / 10%) 0px 0px 0px 4px")};
    }
    transition: box-shadow 150ms ease-in-out 0s, border 150ms ease-in-out 0s, -webkit-box-shadow 150ms ease-in-out 0s;
`;
