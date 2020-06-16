import React, { useState } from 'react'
import classnames from 'classnames'

import {
  InfoCircleOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  CloseOutlined
} from '@ant-design/icons'

import './alert.scss'


interface AlertProps {
  className?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  message: string | React.ReactNode;
  description?: string | React.ReactNode;
  showIcon?: boolean;
  closable?: boolean;
  onClose?: React.MouseEventHandler
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    className,
    type,
    message,
    description,
    onClose,
    showIcon,
    closable
  } = props;

  const [closed, setClosed] = useState(false)

  const classes = classnames('vui-alert', className, {
    [`vui-alert-${type}`]: type,
    [`vui-alert-padding-right`]: closable,
    [`vui-alert-close`]: closed
  })

  const TypeIcon = {
    "info": InfoCircleOutlined,
    "warning": ExclamationCircleOutlined,
    "success": CheckCircleOutlined,
    "error": CloseCircleOutlined
  }[type!]

  const closeAlert = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setClosed(true);
    if(onClose){
      onClose!(e)
    }
  }

  return (
    <div className={classes} >
      {
        showIcon && 
          <TypeIcon 
            className={classnames(`vui-alert-icon-${type}`, {
              'vui-alert-icon': showIcon
            })}
          />
      }
      <span>{message}</span>
      {
        description && 
        <div>{description}</div>
      }
      {
        closable &&
        <span 
          className={classnames({
            'vui-alert-close-btn': closable
          })} 
          onClick={closeAlert}
        >
          <CloseOutlined />
        </span>
        
      }
    </div>
  )
}

Alert.defaultProps = {
  type: 'info', 
  closable: true
}

export default Alert;