import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    margin: 8px;
    border-radius: 8px;
    transition: .3s;
    color:var(--white-900);
    background-color: rgba(0,0,0,0);
    :hover{
        color:var(--black-800);
        background-color: var(--white-900);
    }
    :active{
        background-color: var(--white-800);
    }
`;
export const DashboardLink = styled.a`
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    padding: 8px 16px;
`
