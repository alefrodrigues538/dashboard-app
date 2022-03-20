import React, { ReactElement, SetStateAction } from 'react';
import Link from 'next/link'

import { Container, DashboardLink }from './styles'

type props = {
    title?: string,
    icon?: ReactElement<any>,
    path: string
}

const DashboardItem: React.FC<props> = ({
    title, icon, path
}) => {

    function changeState(setState: SetStateAction<any>, value: any) {
        setState(value)
    }

    return (
        <Container>
                <Link href={path} passHref>
                    <DashboardLink>
                        <span style={{fontSize: '1.75rem',}}>
                            {icon}
                        </span>
                        {title}
                    </DashboardLink>
                </Link>

        </Container >
    );
}

export default DashboardItem;