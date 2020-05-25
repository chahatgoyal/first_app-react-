import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Numbers from './components/numbers'


function OurText(){
  return <p>This is our test message</p>
}
function createalert()
{
  alert("whaaaaaaaat")
}

function ShowMessage(props) {
  if(props.toshow)
  {
      return <h1>proceed</h1>
  
  }

  else
  {
      return <h1>FORBIDDEN</h1>

  }
  
}
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Numbers></Numbers>
        <p>
          HELLO FROM REACT,HIII
        </p>
        <OurText />
        <Header info="This is my message" myalert={createalert}/>
        <Header info="woaaaahhhhh"/>
        <Footer trademark="by chahat"/>
        <ShowMessage toshow ={false} />
      </header>
      
    </div>
  );
}

export default App;
