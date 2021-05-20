import Button from "./components/button/Button";
import Snacksbar from "./components/snacksbar/Snacksbar";
import { useState } from "react";
import { ArrowLeftios, ArrowRightios, ChevronDown, ChevronLeft, ChevronRight, LeftArrow, RightArrow, Tick } from "./components/icons";
import Price from "./components/price/Price";

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
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Tick className="-ml-1 mr-2 h-5 w-5" fill="white" aria-hidden="true" />
        Publish
      </button>
      <Price currency="EUR">9999</Price>
      &nbsp;
      <Price isStriked currency="EUR">
        23454
      </Price>
      <Button
        variant="outline"
        size="lg"
        color="secondary"
        type="button"
        onClick={showSnacksbar}
      >
        <span className="flex items-center">
          <LeftArrow className="mr-2" height="25" width="25" /> Button
        </span>
      </Button>
      
      <Tick />
      <Button>Click me</Button>
      <Button processing={true}>Click me</Button>
      <Button disabled={false}>Click me</Button>
      <Button processing>Click me</Button>
      <Button>Click me</Button>
      <LeftArrow height="25" width="25" />
      <RightArrow height="25" width="25"  />

      <ArrowLeftios  height="25" width="25" />
      <ArrowRightios height="25" width="25" />

      <ChevronLeft />
      <ChevronRight height="25" width="25"/>
      <ChevronDown  height="25" width="25" />

      {isSnacksbarOpen && (
        <Snacksbar message="Can't send photo. Retry in 5 seconds." />
      )}


    </div>
  );
}

export default App;
