import styled from "styled-components";

export const ImageSet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    filter: ${({ blurred }) => (blurred ? "blur(40px)" : "none")};
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 860px;
    width: 100%;
    margin-block-end: 38px;
`;

export const MainHeader = styled.div`
    margin-block-end: 7px;
`;

export const SubHeader = styled.div``;

export const RelatedImages = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, 80px);
    grid-column-gap: 14px;
    max-width: 987px;
    width: 100%;
    justify-content: center;
    margin: 45px;
`;

export const ImageHandles = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    opacity: 0;
    padding: 0 30px;
    box-sizing: border-box;
    transition: opacity 0.235s ease-in-out;
`;

export const ActiveImageWrapper = styled.div`
    position: relative;
    display: flex;
    &:hover {
        ${ImageHandles} {
            opacity: 1;
        }
    }
`;

export const Navigator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
    opacity: 85%;
`;

export const Description = styled.div`
    display: flex;
    max-width: 750px;
    width: 100%;
    justify-content: flex-start;
    margin-block-start: 37px;
`;
