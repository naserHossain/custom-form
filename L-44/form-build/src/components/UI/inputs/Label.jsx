import styled from "styled-components";

const fontSizes = {
    sm: "0.8rem",
    md: "1rem",
    lg: "1.2rem",
};

const lineHeight = {
    sm: "1.2rem",
    md: "1.4rem",
    lg: "2.6rem",
};

const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
    color: #000000;
    line-height: ${(props) => lineHeight[props.line] ?? "1rem"};
    user-select: none;
`;

export default Label;
