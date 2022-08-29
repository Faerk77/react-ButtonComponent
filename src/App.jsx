import './App.css';
import Button from './components/Button';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Buttons</h1>
      <div className="btnContainer">
          <Button />
      </div>
      <div className="btnContainer">
          <Button variant="outline" />
      </div>
      <div className="btnContainer">
          <Button variant="text" />
      </div>
      <div className="btnContainer">
          <Button  />
      </div>
      <div className="btnContainer">
          <Button />
      </div>
    </div>
  );
}

export default App;
