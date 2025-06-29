import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayoutBasic from "./sidemenu.jsx";
import { TaskProvider } from "./context.jsx";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Component {...pageProps} /> */}
      <TaskProvider>
        <DashboardLayoutBasic />
      </TaskProvider>
      {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayoutBasic />}>
      </Route>
    </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
