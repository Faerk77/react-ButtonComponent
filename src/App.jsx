import "./App.css";
import Button from "./components/Button";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Button disabled />
      <Button title="<Button />" size={"sm"} />
      <Button title="<Button variant='outline'" variant="outline" size={"md"} />
      <Button title="<Button variant='text'" variant="text" size={"lg"} />
    </div>
  );
}

export default App;
