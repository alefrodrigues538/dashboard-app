import styled from 'styled-components'

export const Container = styled.div``

export const SidebarLogoContainer = styled.div`
    height: 80px;
    display: flex;
    flex-wrap: nowrap;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`
export const TitleText = styled.p`
    text-align:center;
    color: var(--white-900);
    font-size: 1.8rem;
`
export const TitleIcon = styled.div`
    border-radius: 4px;
    padding: 8px;
    user-select: none;
    background-color: rgba(0,0,0,0);
    color: var(--white-900);
    :hover{
        background-color: var(--white-900);
        color: var(--black)!important;
    }
    :active{
        background-color: var(--white-800);
    }
`