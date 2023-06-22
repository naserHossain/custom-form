import styled from "styled-components";

const TextInput = styled.input`
    width: 100%;
    padding: 0.5em;
    margin: 0.5em;
    color: #d61052;
    background: #ddd;
    border: 1px solid #ec789f;
    border-radius: 3px;
    outline: none;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    &:focus {
        border: 1px solid blue;
    }
`;

export default TextInput;
