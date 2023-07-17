import React, { useState } from 'react';
import Alert from './Alert';
import Main from './Main';

export const Context = React.createContext();

const App = () => {
  const [toggleAlert, setToggleAlert] = useState(false);

  return (
    // <div className="container pt-2">
    //   <Alert />
    //   <Main />
    // </div>

    <Context.Provider value={{toggleValue: toggleAlert, toggle: setToggleAlert}}>
      <div className="container pt-2">
        <Alert />
        {/* <Main setToggleAlert={()=>setToggleAlert((prev) => !prev)} /> */}
        <Main />
      </div>
    </Context.Provider>
  );
};

export default App;
