import "./styles/tailwind.css";
import React from "react";
import { Button, Input } from "./index";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My UI Library</h1>
      <Input placeholder="Type here..." className="mb-4" />
      <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
    </div>
  );
};

export default App;
