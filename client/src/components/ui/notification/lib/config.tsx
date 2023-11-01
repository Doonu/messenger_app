import React from 'react';
import { ArgsProps } from 'antd/es/notification/interface';
import { CSSProperties } from 'styled-components';
import { INotification } from '../../../../entities/notification/model/INotification';
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillWarning,
} from 'react-icons/ai';

type IMessageConfigProps = ArgsProps & Pick<INotification['message'], 'type' | 'level'>;

const notificationConfig = ({
  type,
  message,
  level = 'medium',
  ...props
}: IMessageConfigProps): ArgsProps => {
  let notificationStyle: CSSProperties = {
    marginLeft: 0,
    width: 'max-content',
    border: '1px solid white',
    boxShadow: 'white 0px 0px 10px',
    backgroundColor: '#454545',
  };

  let currentIcons = {
    icon: <AiFillCloseCircle />,
    color: 'white',
  };

  if (level === 'medium') {
    if (type === 'info') {
      notificationStyle = { ...notificationStyle, color: 'white' };
      currentIcons = {
        icon: <AiFillInfoCircle />,
        color: 'white',
      };
    }
    if (type === 'error') {
      notificationStyle = { ...notificationStyle, color: '#ff0202' };
      currentIcons = {
        icon: <AiFillCloseCircle />,
        color: '#ff0202',
      };
    }
    if (type === 'success') {
      notificationStyle = { ...notificationStyle, color: '#27a87a' };
      currentIcons = {
        icon: <AiFillCheckCircle />,
        color: '#27a87a',
      };
    }
    if (type === 'warning') {
      notificationStyle = { ...notificationStyle, color: '#FF9A19' };
      currentIcons = {
        icon: <AiFillWarning />,
        color: '#FF9A19',
      };
    }
  }

  return {
    style: notificationStyle,
    placement: 'bottomLeft',
    closeIcon: null,
    icon: currentIcons.icon,
    message: <div style={{ color: currentIcons.color, fontWeight: '700' }}>{message}</div>,
    duration: 5,
    ...props,
  };
};

export default notificationConfig;
