import React from 'react'
import Button from './components/button'


const App: React.FC = () => {
  return (
    <div className="App" style={{
      padding: "20px"
    }}>
      <Button 
        type='link'
        href='http://www.baidu.com'
        disabled
        target="_blank"
        onClick={() => {console.log('这是a标签')}}
      >a  button</Button> 
      <Button 
        onClick={() => {
          console.log(234);
        }}
      >default Button</Button> 
      <Button type="primary">primary button</Button>
      <Button size="large">large button</Button>
      <Button size="small">small button</Button>
      <div>
        <Button block>block button</Button>
      </div>
    </div>
  );
}

export default App;
