
import React, { SetStateAction, useContext } from 'react'
import DashboardItem from '../components/dashboardItem';

//ICONS
import { AiOutlineHome } from 'react-icons/ai'
import { GoThreeBars } from 'react-icons/go'
import { ImParagraphRight } from 'react-icons/im'

//CONTEXTS
import { SidebarContext }from '../contexts/sidebarContext'

//STYLES
import { Container, SidebarLogoContainer, TitleText, TitleIcon } from '../styles/sidebar.styles'

const SidebarLayout: React.FC = ({
    children
}) => {
    const { sidebarTitle, sidebarCollapsed, toggleSidebarCollapsed} = useContext(SidebarContext)
    return (
        <Container style={{
            minWidth: sidebarCollapsed?'270px':'80px',
            maxWidth: sidebarCollapsed?'270px':'80px',
        }}>
            <SidebarLogoContainer>
                    <TitleText style={{
                        display: sidebarCollapsed?'block': 'none',
                    }}>{sidebarTitle}</TitleText>
                <TitleIcon
                    style={{
                        fontSize: sidebarCollapsed ? '1.75rem' : '2rem',
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
                <DashboardItem path='/overview' title={'Overview'} icon={<AiOutlineHome />} />
                <DashboardItem path='/dashboard' title={'Dashboard'} icon={<AiOutlineHome />} />
                <DashboardItem path='/' title={'Configs'} icon={<AiOutlineHome />} />
            </ul>
        </Container>
    );
}

export default SidebarLayout;