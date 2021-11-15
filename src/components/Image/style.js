import styled from "styled-components";

export const Image = styled.img`
    width: ${({ width }) => !width && "100%"};
    border-radius: ${({ radius }) => radius};
    object-fit: cover;
    cursor: ${({ onClick }) => onClick && "pointer"};
`;
