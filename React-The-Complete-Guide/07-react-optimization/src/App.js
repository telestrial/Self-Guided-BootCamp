import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App Evaluated.");

  // Functions in a component function will be recreated each time it runs.
  // It will always be "new" in terms of React.memo(). This is because
  // functions are objects. Object === Object will always be false.
  // useCallback can solve this.
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

// Tail end of module #12: useMemo. This has similar functionality to useCallback,
// but is used mostly (I think) for data. A hard-coded array, for example, would
// always force reevaluations, even with .memo() exports, because that array
// is being re-created (new memory reference) every time the component its in is
// rerun. That's what we prevent with useMemo(). It does have a memory cost,
// though, so it's up to the individual project to determine the worth of this
// optimization.
