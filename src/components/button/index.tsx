import React, {createElement, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react'
import classnames from 'classnames'

import './button.scss'

export type ButtonSize = 'large' | 'small' | 'default';
export type ButtonType = 'default' | 'primary' | 'link';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';
export type ButtonTagName = 'button' | 'a';


// 定义接口相当于 props-types
export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  tagName?: ButtonTagName;
  block?: boolean;
  children: React.ReactNode;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = Partial<AnchorButtonProps | NativeButtonProps>; 



const Button:React.FC<ButtonProps> = (props) => {
  console.log(props, 'props-=====')
  const {
    className, 
    disabled,
    size,
    type,
    tagName,
    children,
    ...others
  } = props;
  // btn btn-lg btn-primary
  const classes = classnames('vui-btn', className, {
    [`vui-btn-${type}`]: type,
    [`vui-btn-${size}`]: size,
    'disabled': disabled
    }
  )
  
  return createElement(
    tagName!, // 此处非空断言，去除null和undefined，否则会引起ts编译报错
    {
      ...others,
      disabled,
      className: classes
    },
    children
  )
  
  
}

Button.defaultProps = {
  tagName: 'button',
  type: 'default',
  size: 'default',
}

export default Button;