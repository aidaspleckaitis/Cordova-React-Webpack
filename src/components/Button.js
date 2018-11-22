import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    height: 80px;
    width: 300px;
    background-color: purple;
    color: white;
`;

function Button({ greeting }) {

    return <StyledButton>{greeting}</StyledButton>;

};

export default Button;