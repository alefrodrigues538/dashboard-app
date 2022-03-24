import React from 'react';

import { IoMdNotificationsOutline} from 'react-icons/io'

import { NotificationContainer,NotificationIcon, NotificationBadger } from './styles';


const Notifications: React.FC = () => {
  return (
      <NotificationContainer>
          <NotificationIcon>
            <IoMdNotificationsOutline/>
            <NotificationBadger>99</NotificationBadger>
          </NotificationIcon>
      </NotificationContainer>
  );
}

export default Notifications;