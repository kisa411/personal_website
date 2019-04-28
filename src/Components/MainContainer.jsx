import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import About from './About';
import Contact from './Contact';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

class MainContainer extends PureComponent {

    render () {
        return (
            <FlexContainer>
                <Banner />
                <About />
                <Contact />
            </FlexContainer>
        );
    }
}

export default MainContainer;