import React, {
  createContext,
  useState
} from 'react'
import classnames from 'classnames'



export type MenuMode = 'vertical' | 'horizontal' | 'inline';
export type selectCallback = (item: Object) => void;

interface IMenuContext {
  defaultSelectedKeys?: string[];
  selectedKeys?: string[];
  onSelect?: selectCallback;
}

export interface menuProps {
  defaultSelectedKeys?: string[];
  selectedKeys?: string[];
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: selectCallback
}

export const MenuContext = createContext<IMenuContext>({
  defaultSelectedKeys: ['0']
})

const Menu: React.FC<menuProps> = (props) => {
  const {
    className,
    mode,
    style,
    selectedKeys,
    defaultSelectedKeys,
    onSelect,
    children,
    ...others
  } = props;

  const [ currentActive, setActive ] = useState(defaultSelectedKeys)

  const classes = classnames('vui-menu', classnames, {
    'menu-vertical': mode === 'vertical'
  })

  return (
    <ul className={classes} style={style}>
      {children}

      
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'horizontal',
  defaultSelectedKeys: ['0']
}


export default Menu;