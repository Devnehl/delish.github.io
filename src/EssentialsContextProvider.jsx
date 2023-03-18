import React, { createContext, useState } from "react";

// create a context object named EssentialsContext
export const EssentialsContext = createContext();

// define a component named EssentialsContextProvider to provide the context value
function EssentialsContextProvider(props) {
  // define a state variable named text and its setter function using useState
  const [text, setText] = useState("MENU");
  return (
    <EssentialsContext.Provider value={{ text, setText }}>
      {props.children}
    </EssentialsContext.Provider>
  );
}
export default EssentialsContextProvider;
