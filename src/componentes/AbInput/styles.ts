import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 509px;
`;

export const InputLabel = styled.label`
    color: #002F52;
    font-family: sans-serif;
    padding-left: 24px;
    font-weight: 700;
`;

export const Input = styled.input`
    border-radius: 24px;
    padding: 10px 24px;
    margin-top: 10px;
    border: 1px solid #002F52;
    &::placeholder {
        color: #A4A4A4
    }
`;