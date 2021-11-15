import styled from "styled-components";

export const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding-block-start: 80px;
`;

export const Biography = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    margin-inline-end: 80px;
`;

export const BiographyHeader = styled.div`
    display: flex;
    margin-block-end: 14px;
`;

export const BiographyContent = styled.div`
    display: flex;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    padding: 24px 26px;
    background: #fafafb;
    height: 90px;
    width: 250px;
    & > :not(:last-child) {
        margin-block-end: 12px;
    }
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
`;

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    margin-inline-end: 80px;
`;

export const SkillsHeader = styled.div`
    display: flex;
    margin-block-end: 14px;
`;

export const Top = styled.div`
    display: flex;
    margin-block-end: 30px;
    padding-inline-start: 21%;
`;

export const Bottom = styled.div`
    display: flex;
    padding-inline-start: 21%;
`;

export const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
