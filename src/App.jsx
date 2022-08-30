import './App.css';
import Button from './components/Button';
import BtnIcon from './components/BtnIcon';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Buttons</h1>
      <div className="btnContainer">
        <Button text="Default" />
        <Button text="Default" variant="outline" />
        <Button text="Default" variant="text" />
        <Button text="Default" disableShadow />
        <Button text="Disabled" disabled/>
        <Button text="Default" variant="text" />
        <Button text="Default" endIcon={BtnIcon} />
        <Button text="Default" size="sm" />
        <Button text="Default" size="md" />
        <Button text="Default" size="lg" />
        <Button text="Primary" color="primary" />
        <Button text="Secundary" color="secundary" />
        <Button text="Danger" color="danger" size="lg" />
      </div>
    </div>
  );
}

export default App;
