import { Suspense, lazy } from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css"

// import Home from './Components/Pages/Home';
// import Products from './Components/Pages/Products';
// import About from './Components/Pages/About';
// import SingleProduct from './Components/Pages/SingleProduct';
// import ContactUs from './Components/Pages/ContactUs';

import Spinner from "./Components/Spinner";

const Home = lazy(() => import('./Components/Pages/Home'));
const Products = lazy(() => import('./Components/Pages/Products'));
const About = lazy(() => import('./Components/Pages/About'));
const SingleProduct = lazy(() => import('./Components/Pages/SingleProduct'));
const ContactUs = lazy(() => import('./Components/Pages/ContactUs'));



function App() {

  return (
    <>

      <Router>

        <Suspense fallback={<Spinner />}>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/SingleProduct" element={<SingleProduct />} />
            <Route path="/contactus" element={<ContactUs />} />

          </Routes>

        </Suspense>

      </Router>

    </>
  )
}

export default App
