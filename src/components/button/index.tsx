import React, {createElement, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react'
import classnames from 'classnames'

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
  width?: number;
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
  console.log(props, 'props==');
  const {
    className, 
    disabled,
    size,
    type,
    tagName,
    width,
    children,
    ...others
  } = props;
  // btn btn-lg btn-primary
  const classes = classnames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'disabled': disabled
    }
  )
  
  return createElement(
    tagName!,
    {
      ...others,
      style: Object.assign({}, {width}),
      className: classes
    },
    children
  )
  
  
}

Button.defaultProps = {
  tagName: 'button',
  type: 'default',
  size: 'default'
}

export default Button;