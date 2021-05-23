import React from 'react'
import classnames from 'classnames'
import classes from '*.module.css';

export interface MenuItemProps {
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;

}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    disabled,
    className,
    style,
    children
  } = props;

  const classes = classnames('lr-menu-item', className, {
    'is-disabled': disabled
  })

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  )
}

export default MenuItem;