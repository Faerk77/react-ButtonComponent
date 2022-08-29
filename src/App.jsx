import "./App.css";
import Button from "./components/Button";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Button />
      <Button title="<Button />" />
      <Button title="<Button variant='outline'" variant="outline" />
      <Button title="<Button variant='text'" variant="text" />
    </div>
  );
}

export default App;
