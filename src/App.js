import Button from "./components/button/Button";
import Snacksbar from "./components/snacksbar/Snacksbar";
import { useState } from "react";

function App() {
  const [isSnacksbarOpen, setsnacksbarOpen] = useState(false);
  const showSnacksbar = () => {
    if (isSnacksbarOpen) {
      return;
    }
    setsnacksbarOpen(true);

    setTimeout(() => {
      // setsnacksbarOpen(false);
    }, 5000);
  };
  return (
    <div className="m-40">
      <Button
        variant="outline"
        size="lg"
        color="secondary"
        type="button"
        onClick={showSnacksbar}
      >
        Button
      </Button>

      {isSnacksbarOpen && (
        <Snacksbar message="Can't send photo. Retry in 5 seconds." />
      )}
    </div>
  );
}

export default App;
