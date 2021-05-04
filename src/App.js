import Button from "./components/button/Button";

function App() {
  return (
    <div className="m-40">
      <Button buttonStyle="btn-primary-solid" buttonSize="btn-small">
        Active Toggle Button
      </Button>
      <br />
      <br />

      <Button buttonStyle="btn-primary-solid" buttonSize="btn-medium">
        Active Toggle Button
      </Button>
      <br />
      <br />

      <Button buttonStyle="btn-primary-solid" buttonSize="btn-large">
        Active Toggle Button
      </Button>
      <br />
      <br />

      <Button buttonStyle="btn-primary-outline" buttonSize="btn-small">
        Active Toggle Button
      </Button>
      <br />
      <br />

      <Button buttonStyle="btn-primary-outline" buttonSize="btn-medium">
        Active Toggle Button
      </Button>
      <br />
      <br />

      <Button buttonStyle="btn-primary-outline" buttonSize="btn-large">
        Active Toggle Button
      </Button>
    </div>
  );
}

export default App;
