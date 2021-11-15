import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    opacity: 0;
    position: absolute;
    justify-content: flex-end;
    top: 0;
    height: calc(100% - 7px);
    border-radius: 8px;
    width: 100%;
    padding: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    box-sizing: border-box;
    transition: opacity 0.15s ease-in-out;
    cursor: pointer;
    background: linear-gradient(
        180deg,
        transparent 62%,
        rgba(0, 0, 0, 0.00345888) 63.94%,
        rgba(0, 0, 0, 0.014204) 65.89%,
        rgba(0, 0, 0, 0.0326639) 67.83%,
        rgba(0, 0, 0, 0.0589645) 69.78%,
        rgba(0, 0, 0, 0.0927099) 71.72%,
        rgba(0, 0, 0, 0.132754) 73.67%,
        rgba(0, 0, 0, 0.177076) 75.61%,
        rgba(0, 0, 0, 0.222924) 77.56%,
        rgba(0, 0, 0, 0.267246) 79.5%,
        rgba(0, 0, 0, 0.30729) 81.44%,
        rgba(0, 0, 0, 0.341035) 83.39%,
        rgba(0, 0, 0, 0.367336) 85.33%,
        rgba(0, 0, 0, 0.385796) 87.28%,
        rgba(0, 0, 0, 0.396541) 89.22%,
        rgba(0, 0, 0, 0.4) 91.17%
    );
`;

export const Image = styled.div`
    position: relative;
    &:hover {
        ${Info} {
            opacity: 1;
        }
    }
`;
