import logo from './logo.svg';
import './App.css';

function App() {
  const list=[
    {
      fulname:'Ismail',
      lastname:'Lashari',
      misc:'React js class'
    }
  ]
  const username='someone2'

  return (
    <div classname="App">
    {
      list.map((listitem)=>{
        return(
          <>
          <h1>{listitem.fulname}</h1>
          <h2>{listitem.lastname}</h2>
          <h3>{listitem.misc}</h3>
          </>
        )
      })
    }      
    </div>
  );
}

export default App;
