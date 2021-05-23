import React, {createElement} from 'react'
import classnames from 'classnames'

import './button.scss'


export type ButtonSize = 'large' | 'small' | 'default';
export type ButtonType = 'default' | 'primary' | 'text';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';
export type ButtonShapeType = 'circle' | 'round';

// 定义接口相当于 props-types
export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  block?: boolean;
  children: React.ReactNode;
  shape?: ButtonShapeType;
}

export type AnchorButtonProps = {
  href?: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps = {
  href?:string;
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
    href,
    shape,
    onClick,
    ...others
  } = props;
  
  // btn btn-lg btn-primary
  const classes = classnames('vui-btn', className, {
    [`vui-btn-${type}`]: type,
    [`vui-btn-${size}`]: size,
    [`vui-btn-${shape}`]: size,
    'disabled': disabled,
    'block': block
    }
  )

  const ele = href ? 'a' : 'button';
  
  return createElement(
    ele,
    {
      ...others,
      href: href ? href : null,
      disabled: disabled,
      type: type,
      className: classes,
      onClick: !disabled ? (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // 此处MouseEvent后必须跟范型，否则下边调用onClick方法时ts编译会报错
        onClick!(e) // 此处!为非空断言，去除null和undefined，否则会引起ts编译报错
      } : null
    },
    children
  )
  
  
}

Button.defaultProps = {
  type: 'default',
  size: 'default',
  disabled: false,
  shape: 'round',
  onClick: () => {}
}

export default Button;