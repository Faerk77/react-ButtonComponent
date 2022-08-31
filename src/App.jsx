import './App.css';
import Button from './components/Button';
import BtnIcon from './components/BtnIcon';
import ButtonWrapper from './components/ButtonWrapper';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Buttons</h1>
      <div className="btnsContainer">
        <div className="btnGroup">
          <ButtonWrapper text={'<Button />'} btn={<Button text="Default" />} />
          <ButtonWrapper
            text={'<Button variant="outline" />'}
            btn={<Button text="Outline" variant="outline" />}
          />
          <ButtonWrapper
            text={'<Button variant="text" />'}
            btn={<Button text="Text" variant="text" />}
          />
          <ButtonWrapper
            text={'<Button disabledShadow />'}
            btn={<Button text="Disabled Shadow" disabledShadow />}
          />
        </div>
        <div className="btnGroup">
          <ButtonWrapper
            text={'<Button disabled />'}
            btn={<Button text="Disabled" disabled />}
          />
          <ButtonWrapper
            text={'<Button variant="text" disabled />'}
            btn={<Button text="Disabled Text" variant="text" disabled />}
          />
        </div>
        <div className="btnGroup">
          <ButtonWrapper
            text={'<Button startIcon="local_grocery_store" />'}
            btn={<Button text="startIcon" startIcon={BtnIcon} />}
          />
          <ButtonWrapper
            text={'<Button endIcon="local_grocery_store" />'}
            btn={<Button text="endIcon" endIcon={BtnIcon} />}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
