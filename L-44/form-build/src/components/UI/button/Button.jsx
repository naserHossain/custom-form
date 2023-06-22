import styled from "styled-components";

const Button = styled.button`
    border: none;
    outline: none;
    background: #e1e1e1;
    border-radius: 0.15em;
    padding: 0.25em 1em;
    font-size: 1em;
    font-weight: 600;
    color: #d61052;
    cursor: pointer;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    &:hover {
        background: #3a7fda;
        color: white;
    }
`;
export default Button;
