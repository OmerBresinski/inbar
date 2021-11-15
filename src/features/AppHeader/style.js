import styled from "styled-components";

export const AppHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 470px;
    width: 100%;
    padding-inline-start: 6%;
    box-sizing: border-box;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 580px;
    align-items: flex-start;
    padding-block-start: 50px;
`;

export const Cover = styled.div`
    height: 100%;
    @media (max-width: 1475px) {
        display: none;
    }
`;

export const AvatarWrapper = styled.div`
    margin-block-end: 16px;
`;

export const SubTitle = styled.div`
    margin-block-end: 12px;
`;

export const Title = styled.div`
    overflow: hidden;
`;
