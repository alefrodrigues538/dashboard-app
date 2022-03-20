
import React, { SetStateAction, useContext } from 'react'
import DashboardItem from '../components/dashboardItem';

import { AiOutlineHome } from 'react-icons/ai'
import { GoThreeBars } from 'react-icons/go'
import { ImParagraphRight } from 'react-icons/im'

import { SidebarContext }from '../contexts/sidebarContext'

import { Container, SidebarLogoContainer, TitleText, TitleIcon } from '../styles/sidebar.styles'

const SidebarLayout: React.FC = ({
    children
}) => {
    const { sidebarTitle, set_SidebarTitle,
        sidebarCollapsed, toggleSidebarCollapsed} = useContext(SidebarContext)

    const [color, setColor] = React.useState('#FFF');
    const [hoverColor, setHoverColor] = React.useState('');

    function changeState(setState: SetStateAction<any>, value: any) {
        setState(value)
    }
    return (
        <Container>
            <SidebarLogoContainer>
                    <TitleText style={{
                        display: sidebarCollapsed?'block': 'none',
                    }}>{sidebarTitle}</TitleText>
                <TitleIcon
                    style={{
                        fontSize: sidebarCollapsed ? '1.75rem' : '2rem',
                        color: color,
                        backgroundColor: hoverColor
                    }}
                    onClick={() => 
                        toggleSidebarCollapsed()
                    }>
                    {
                        sidebarCollapsed ?
                            <ImParagraphRight /> :
                            <GoThreeBars />
                    }
                </TitleIcon>
            </SidebarLogoContainer>
            <ul>
                <DashboardItem path='/overview'
                title={sidebarCollapsed ? 'Overview' : ''} icon={<AiOutlineHome />} />
                <DashboardItem path='/'
                title={sidebarCollapsed ? 'Dashboard' : ''} icon={<AiOutlineHome />} />
                <DashboardItem path='/'
                title={sidebarCollapsed ? 'Configs' : ''} icon={<AiOutlineHome />} />
            </ul>
        </Container>
    );
}

export default SidebarLayout;