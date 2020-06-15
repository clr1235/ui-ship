import React, {createElement} from 'react'
import classnames from 'classnames'

import './button.scss'


export type ButtonSize = 'large' | 'small' | 'default';
export type ButtonType = 'default' | 'primary' | 'link';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';

// 定义接口相当于 props-types
export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  block?: boolean;
  children: React.ReactNode;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = Partial<AnchorButtonProps | NativeButtonProps>; 



const Button:React.FC<ButtonProps> = (props) => {
  const {
    className, 
    disabled,
    size,
    type,
    children,
    block,
    onClick,
    ...others
  } = props;
  // btn btn-lg btn-primary
  const classes = classnames('vui-btn', className, {
    [`vui-btn-${type}`]: type,
    [`vui-btn-${size}`]: size,
    'disabled': type === 'link' && disabled,
    'block': block
    }
  )

  const ele = type === 'link' ? 'a' : 'button';
  
  return createElement(
    // tagName!, // 此处非空断言，去除null和undefined，否则会引起ts编译报错
    ele,
    {
      ...others,
      disabled: type !== 'link' ? disabled : null,
      className: classes,
      onClick
    },
    children
  )
  
  
}

Button.defaultProps = {
  type: 'default',
  size: 'default',
  disabled: false,
  onClick: () => {
    
  }
}

export default Button;