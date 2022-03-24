import styled from 'styled-components';

export const UserAvatarContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 16px;
    padding: 4px 8px;
    transition: .3s;
    :active{
        background-color: #eee;
    }
`;

export const UserAvatarImg = styled.span`
    font-size: 2rem;
    color: var(--black-800); 
    user-select: none;
`;

export const UserAvatarName = styled.p`
    color: var(--black-800);
    user-select: none;
    font-weight: bold;
`