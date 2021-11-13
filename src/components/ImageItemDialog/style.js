import styled from "styled-components";

export const ImageItemDialog = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 99;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    opacity: ${({ opacity }) => opacity};
    transition: opacity 0.15s ease-in-out;
`;

export const DialogHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 48px;
    width: 100%;
    color: white;
    padding-inline-end: 8px;
    box-sizing: border-box;
    cursor: pointer;
`;

export const DialogContent = styled.div`
    display: flex;
    flex-direction: column;
    opacity: 1;
    background: white;
    height: 100%;
    width: 100%;
    padding: 55px 0px;
    align-items: center;
    border-radius: 12px 12px 0px 0px;
    overflow-y: auto;
    filter: ${({ blurred }) => blurred && "brightness(0.4)"};
    & > :not(:last-child) {
        margin-block-end: 100px;
    }
`;

export const PasswordInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    top: 40px;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background: transparent;
    z-index: 100;
    filter: blur(0px);
    cursor: pointer;
`;

export const PasswordDialog = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px 50px 0px;
    box-sizing: border-box;
    border-radius: 12px;
    background: white;
    height: 195px;
    width: 500px;
    filter: blur(0px);
    transform: scale(0.8);
    cursor: default;
`;

export const PasswordHeaderWrapper = styled.div`
    padding-inline-start: 2px;
    margin-block-end: 13px;
`;

export const Input = styled.input`
    display: flex;
    align-items: center;
    height: 40px;
    font-family: "Roboto";
    border: none;
    outline: none;
    letter-spacing: 5px;
    color: #c2c2c2;
    transition: color 0.15s ease-in-out;
    width: 100%;
    padding: 0px 10px;
    font-size: 26px;
    border-radius: 5px;
    &:focus {
        color: black;
    }
    &:hover {
        color: black;
    }
`;

export const PasswordInput = styled.form`
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 3px solid #4e4443;
    height: 41px;
    border-radius: 5px;
    padding-inline-end: 3px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-start-end-radius: 6px;
    border-end-end-radius: 6px;
    border-start-start-radius: 3px;
    border-end-start-radius: 3px;
    background: #4e4443;
    width: 44px;
    height: 35px;
    cursor: pointer;
    border: 0px;
`;

export const Error = styled.div`
    margin-inline-start: 3px;
    margin-block-start: 7px;
`;
