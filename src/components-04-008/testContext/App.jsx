import React from 'react';
// import { useState } from 'react';
import Alert from './Alert';
import Main from './Main';
import Context from './Context';

// export const Context = React.createContext();

// const App = () => {
//   const [toggleAlert, setToggleAlert] = useState(false);

//   return (
//     // <div className="container pt-2">
//     //   <Alert />
//     //   <Main />
//     // </div>

//     <Context.Provider value={{toggleValue: toggleAlert, toggle: setToggleAlert}}>
//       <div className="container pt-2">
//         <Alert />
//         {/* <Main setToggleAlert={()=>setToggleAlert((prev) => !prev)} /> */}
//         <Main />
//       </div>
//     </Context.Provider>
//   );
// };

// рефакторинг
const App = () => {
  return (
    <Context>
      <div className="container pt-2">
        <Alert />
        <Main />
      </div>    
    </Context>
  )
}


export default App;
