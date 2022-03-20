import React, { useContext} from 'react';
import { HeaderContext } from './../contexts/headerContext';

import { Container }from '../styles/header.styles'

type headerProps = {
    title?: string
}

const HeaderLayout: React.FC<headerProps> = ({
    title
}) => {
    const{headerTitle} = useContext(HeaderContext)

    return (
        <Container>
            <h1 style={{
                fontSize: '1.75rem'
            }}>{headerTitle}</h1>
        </Container>
    );
}

export default HeaderLayout;