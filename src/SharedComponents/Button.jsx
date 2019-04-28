import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`

`;

class Button extends PureComponent {

    render () {
        return (
            <StyledButton>{this.props.text}</StyledButton>
        )
    }
}

export default Button;