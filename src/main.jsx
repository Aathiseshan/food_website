// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";
// import StoreContextProvider from "./Context/StoreContext.jsx";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <StoreContextProvider>
//       <App />
//     </StoreContextProvider>
//   </BrowserRouter>
// );



import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import StoreContextProvider from './Context/StoreContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/FoodWeb"> {/* Add basename to handle subdirectory */}
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
