import styled from "styled-components";

export const Video = styled.video`
    display: flex;
    width: ${({ width }) => !width && "100%"};
    border-radius: ${({ radius }) => radius};
    height: 100%;
    object-fit: cover;
    min-height: ${({ isRelated }) => !isRelated && "557px"};
`;
