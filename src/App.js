// useHook
import { useState } from "react";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// Context
import Context from "./context/Context";
// routes
import MainRoute from "./routes/MainRoute";


function App() {
  const body = document.body;
  const [dark, setDark] = useState()
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [menu, setMenu] = useState()

  const handleDark = () => setDark(!dark)
  dark ? (body.className = 'dark') : (body.className = '')
  return (
    <>
      <Context.Provider value={{ dark, handleDark, modal, setModal, modal1, setModal1, menu, setMenu }}>
        <BrowserRouter>
          <MainRoute />
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
