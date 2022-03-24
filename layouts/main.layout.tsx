import React, { ReactElement, useContext } from 'react';
import { SidebarContext } from './../contexts/sidebarContext';

import { Container,Wrapper, SidebarContainer, HeaderContainer, ContentContainer } from '../styles/mainLayout.styles'

type layoutProps = {
    Header?: ReactElement<any>,
    Sidebar?: ReactElement<any>,
    Content?: ReactElement<any>,
}

const MainLayout: React.FC<layoutProps> = ({
    Header, Sidebar, Content
}) => {
    const { sidebarCollapsed} = useContext(SidebarContext)

    return (
        <Container>
            {Sidebar}
            <Wrapper style={{
                width: sidebarCollapsed?
                    'calc(100vw - 270px)':
                    'calc(100vw - 80px)',
            }}>
                {Header}
                {Content}
            </Wrapper>
        </Container>
    );
}

export default MainLayout;