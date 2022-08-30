import './App.css';
import Button from './components/Button';
import BtnIcon from './components/BtnIcon';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Buttons</h1>
      <div className="btnContainer">
        <Button />
        <Button variant="outline" />
        <Button variant="text" size="sm" />
        <Button disableShadow />
        <Button disabled />
        <Button variant="text" disabled />
        <Button endIcon={BtnIcon} />
        <Button text="Primary" color="primary" />
        <Button text="Secundary" color="secundary" />
        <Button text="Danger" color="danger" />
      </div>
    </div>
  );
}

export default App;
