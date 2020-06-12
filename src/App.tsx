import React from 'react'
import Button from './components/button'


const App: React.FC = () => {
  return (
    <div className="App" style={{
      padding: "20px"
    }}>
      <Button 
        disabled={true} 
        onClick={() => {console.log(123)}}
      >default Button</Button> 
    </div>
  );
}

export default App;
