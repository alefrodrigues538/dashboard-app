import React, {ReactElement} from 'react';

import { UserAvatarContainer, UserAvatarImg, UserAvatarName } from './styles';
import { ImageProps } from 'next/image';

import { AiOutlineUser } from 'react-icons/ai'

type userAvatarProps = {
    userName?:String;
    UserAvatar?: ImageProps | ReactElement<any>;
}

const UserAvatar: React.FC<userAvatarProps> = ({
    userName,
    UserAvatar
}) => {
  return (
      <UserAvatarContainer>
        <UserAvatarImg>
            {
                UserAvatar || 
                <AiOutlineUser/>
            }
        </UserAvatarImg>
        <UserAvatarName>{userName || 'Sign In'}</UserAvatarName>
      </UserAvatarContainer>
  );
}

export default UserAvatar;