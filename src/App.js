
import './App.css';
import Gallery from './components/Gallery.js'

const App=()=> {
  return (
    <div className="App">
      <h1 style={{textAlign:'center',color:'green'}}>Welcome to Computer Society of Kirinyaga Galleries Page</h1>
      <h2 style={{textAlign:'center',color:'blue'}}>Click an Image to view</h2>
      <Gallery/>
    </div>
  );
}

export default App;
