import Button from "./components/button/Button";

function App() {
  return (
    <div className="m-40">
      <Button variant="solid" size="base" color="primary" type="button">
        Button
      </Button>
      <br></br>
      <br></br>
      <Button variant="outline" size="lg" color="secondary" type="button">
        Button
      </Button>

      <br></br>
      <br></br>
      <Button>Button</Button>

      <br></br>
      <br></br>
      <Button size="lg" color="secondary" type="button" disabled>
        Button
      </Button>

      <br></br>
      <br></br>
      <Button size="lg" color="secondary" type="button" processing>
        Button
      </Button>
    </div>
  );
}

export default App;
