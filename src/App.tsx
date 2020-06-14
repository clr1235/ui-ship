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
        onClick={(e) => {console.log(123)}}
      >default Button</Button> 
    </div>
  );
}

export default App;
