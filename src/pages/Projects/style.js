import styled from "styled-components";

export const Projects = styled.div`
    display: grid;
    padding-block-start: 48px;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 48px;
    width: 100%;
    margin-block-end: 20px;
    padding-block-end: 120px;
`;
