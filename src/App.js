import './App.css';
import Buttons from './components/Buttons';
import Formulario from './components/Formulario';
import Grids from './components/Grids';
import Icons1 from './components/Icons1';
import Inputs from './components/Inputs';
import Message from './components/Message';
import Modals from './components/Modals';
import Typography1 from './components/Typography1';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Buttons/>
        <hr/>
        <Icons1/>
        <hr/>
        <div >
        <Typography1/>
        </div>
        <hr/>
        <Inputs/>
        <hr/>
        <Message/>
        <hr/>
        <Grids/>
        <hr/>
        <Formulario/>
        <hr/>
        <Modals/>
        <br></br>
      </div>
    </div>
  );
}

export default App;
