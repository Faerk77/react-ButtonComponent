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
            btn={<Button text="startIcon" color='primary' startIcon={BtnIcon} />}
          />
          <ButtonWrapper
            text={'<Button endIcon="local_grocery_store" />'}
            btn={<Button text="endIcon" color='primary' endIcon={BtnIcon} />}
          />
        </div>
        <div className='btnGroup'>
        <ButtonWrapper
            text={'<Button size="sm" />'}
            btn={<Button text="Small" color='primary' size='sm' />}
          />
          <ButtonWrapper
            text={'<Button size="md" />'}
            btn={<Button text="Medium" color='primary' size='md' />}
          />
          <ButtonWrapper
            text={'<Button size="lg" />'}
            btn={<Button text="Large" color='primary' size='lg' />}
          />
        </div>
        <div className='btnGroup'>
        <ButtonWrapper
            text={'<Button color="primary" />'}
            btn={<Button text="Primary" color='primary'/>}
          />
          <ButtonWrapper
            text={'<Button color="secondary" />'}
            btn={<Button text="Secondary" color='secondary'/>}
          />
          <ButtonWrapper
            text={'<Button color="danger" />'}
            btn={<Button text="Danger" color='danger'/>}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
