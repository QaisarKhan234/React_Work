// import './App.css';
// import Paragraph from './components/paragraph';
// import Logo from './components/logo';
// import Link from './components/link';
// import BookList from './components/BookList';
// import UserForm from './components/UserForm';
// import FormTask from './components/FormTask';
import RegForm from "./components/RegForm";
// import Useeffect from "./components/UseEffect";
// import EffectOk from "./components/EffectOk";
// import {Counter} from "./components/compsRendering/counter";
// import { Route, Routes } from "react-router-dom";
// import Home from "./components/Routing/Home";
// import About from "./components/Routing/About";
// import Navbar from "./components/Routing/Navbar";
// import Products from "./components/Routing/Products";
// import Gents from "./components/Routing/Gents";
// import Ladies from "./components/Routing/Ladies";
import isPrime from "./components/Interview assisment/IsPrime";
import CarReact from "./Task7/CarReact";


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          
         {/* <isPrime/> */}
          {/* <CarReact/> */}
          {/* <Navbar/> */}
          {/* <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />}>
                <Route path="/products/gents" element={<Gents />} />
                <Route path="/products/ladies" element={<Ladies />} />
              </Route>
            </Route>
          </Routes> */}

          {/* <Counter/> */}
          {/* <EffectOk/> */}
          {/* <Useeffect/> */}
          <RegForm/>
          {/* <FormTask/> */}
          {/* <UserForm/> */}
          {/* <BookList/> */}
          {/* <Logo /> */}
          {/* <Paragraph /> */}
          {/* <Link />  */}
        </header>
      </div>
    </>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//}

export default App;
