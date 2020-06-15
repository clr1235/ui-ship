import React, {
  Fragment
} from 'react'


interface AlertProps {
  className?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  message?: string | React.ReactNode;
  description?: string | React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>
}

const Alert: React.FC<AlertProps> = () => {
  return (
    <Fragment>
      这是alert
    </Fragment>  
  )
}

export default Alert;