import React, { Suspense } from "react";
import "../style/index.scss";

const Button = React.lazy(() => import("../components/Button"));

function App() {
  return (
    <div className="App">
      <h1>Cordova!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Button greeting="React!" />
        <Button greeting="Cordova!" />
        <Button greeting="React-Native!" />
        <Button greeting="Styled Components!" />
        <Button greeting="Webpack!" />
        <Button greeting="Code Splitting!" />
      </Suspense>
    </div>
  );
}

export default App;
