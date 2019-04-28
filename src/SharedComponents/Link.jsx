import React, { PureComponent } from 'react';
import styled from 'styled-components';

const LinkAttribute = ({children}) => (
    <a>
        {children}
    </a>
);

const StyledLink = styled.a`

`;

class Link extends PureComponent {
    render() {
        return (
            <StyledLink>{this.props.text}</StyledLink>
        )
    }
}

export default Link;