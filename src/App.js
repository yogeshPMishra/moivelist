import './App.css';
import Moiveslist from './moive.json'
import Moives from './Components/Moive/Moives';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Moives Lists</h1>
      <header className="App-header">
          {
            Moiveslist.map((elem,index)=>{
             return  <Moives key={index}  title={elem.Title} image={elem.Images[0]} year={elem.Year} genre={elem.Genre} language ={elem.Language} imdbVotes= {elem.imdbVotes}/>
            })
          }
      </header>
      <footer className ="footer">
          <p>Copyrigt &copy; 2023-24. saintellectsolution.com</p>
      </footer>
    </div>
  );
}

export default App;
