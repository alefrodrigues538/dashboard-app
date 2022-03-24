import styled from 'styled-components';

export const NotificationContainer = styled.div`
    position: relative;
    cursor: pointer;
    transition: .3s;
    border-radius: 100%;
    :active{
        background-color: #bbb;
    }
`;
export const NotificationIcon = styled.span`
    font-size: 2.25rem ;
    user-select: none;
`;
export const NotificationBadger = styled.span`
    position: absolute;
    padding: 2px 4px;
    max-height: 20px;
    max-width: 32px;
    background-color: var(--background-notification-badger);
    border-radius: 100%;
    right: -4px;
    top: -4px;
    font-size: 0.7rem;
    color: var(--white-900);
    user-select: none;
`