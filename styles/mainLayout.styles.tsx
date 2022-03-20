import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    max-height: 100vh;
    width: 100vw;
    gap: 8px;
    background-color: var(--white-800);
`;
export const Wrapper = styled.div`
    transition: .2s;
    overflow-y: scroll;
`
export const SidebarContainer = styled.div`
    background-color: var(--black-800);
    height: 100vh;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    transition: .2s;
`
export const HeaderContainer = styled.div``
export const ContentContainer = styled.div`
    min-height: calc(100vh - 100px);
    background-color: var(--white-900);
`