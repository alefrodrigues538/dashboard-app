import React, { useContext} from 'react';
import { HeaderContext } from './../contexts/headerContext';

import { Container }from '../styles/header.styles'
import Notifications from './../components/notifications/index';
import UserAvatar from './../components/userAvatar/index';

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
            <div style={{
                display: 'flex', gap:'16px', alignItems:'center'
            }}>
                <Notifications/>
                <UserAvatar/>
            </div>
        </Container>
    );
}

export default HeaderLayout;