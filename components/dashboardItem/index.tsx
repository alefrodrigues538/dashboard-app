import React, { ReactElement, useContext } from 'react';
import Link from 'next/link'

import { Container, DashboardLink }from './styles'
import { SidebarContext } from './../../contexts/sidebarContext';

type props = {
    title?: string,
    icon?: ReactElement<any>,
    path: string
}

const DashboardItem: React.FC<props> = ({
    title, icon, path
}) => {
    const { sidebarCollapsed} = useContext(SidebarContext)

    return (
        <Container>
                <Link href={path} passHref>
                    <DashboardLink>
                        <span style={{fontSize: '1.75rem',}}>
                            {icon}
                        </span>
                        {sidebarCollapsed?title:''}
                    </DashboardLink>
                </Link>

        </Container >
    );
}

export default DashboardItem;