import React, { PureComponent } from 'react';
import Button from '../SharedComponents/Button';
import Link from '../SharedComponents/Link';

class Banner extends PureComponent {

    render () {
        return (
            <div>
                <Link text="I'm a link"></Link><br/>
                <Button text="I'm a button."></Button>
                <h3>*insert picture here*</h3>
            </div>
        );
    }
}

export default Banner;