import React from 'react'
import Button from './components/button'
import Alert from './components/alert'
import Menu from './components/menu'

const App: React.FC = () => {
  return (
    <div className="App" style={{
      padding: "20px"
    }}>
      <Button 
        type='text'
        href='http://www.baidu.com'
        target="_blank"
        onClick={() => {console.log('这是a标签')}}
      >a  button</Button> 
      <Button 
        onClick={() => {
          console.log(234);
        }}
        shape="circle"
      >default Button</Button> 
      <Button type="primary">primary button</Button>
      <Button size="large">large button</Button>
      <Button size="small">small button</Button>
      <div>
        <Button block>block button</Button>
      </div>
        <br/>
      <div>
        <Alert message="这是一个alert" showIcon={true}/>
        <br/>
        <Alert message="success icon的alert" showIcon={true} type="success" closable
          description="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text
          测试下文字长度吧，测试下文字长度吧，测试下文字长度吧，测试下文字长度吧，测试下文字长度吧，测试下文字长度吧，测试下文字长度吧，测试下文字长度吧，测试下文字长度吧，"
        />
        <br/>
        <Alert message="warning icon的alert" showIcon={true} type="warning"/>
        <br/>
        <Alert message="error icon的alert" showIcon={true} type="error" closable
          onClose={() => {  
            console.log('关闭的回调')
          }}
        />
        
      </div>
      <br/>
      <div>
        <Menu>
          <li>菜单一</li>
          <li>菜单二</li>
          <li>菜单三</li>
        </Menu>
      </div>
    </div>
  );
}

export default App;
