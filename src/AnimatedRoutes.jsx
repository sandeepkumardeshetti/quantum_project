import React, {Suspense, lazy} from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'))
const AllServices = lazy(() => import('./pages/AllServices/AllServices'))
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs' ));
const Contact = lazy(() => import('./pages/Contact/Contact' ));
const Products = lazy(() => import('./pages/Products/Products' ));
const RetroMarkProducts = lazy(() => import('./pages/RetroMarkProducts/RetroMarkProducts'));
const RetroMark = lazy(() => import('./pages/RetroMark/RetroMark' ));
import { AnimatePresence } from 'framer-motion';
const RetroMarkPro = lazy(() => import('./pages/RetroMarkPro/RetroMarkPro' ));
const RetroMarkExtreme = lazy(() => import('./pages/RetroMarkExtreme/RetroMarkExtreme' ));
const RetroMarkUltra = lazy(() => import('./pages/RetroMarkUltra/RetroMarkUltra' ));
const GlassBeads = lazy(() => import('./pages/GlassBeads/GlassBeads' ));





export const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
      <Suspense fallback={ <p>Loading...</p>} >
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/services" element={<AllServices />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/retroMarkProducts" element={<RetroMarkProducts />} />
          <Route exact path='/retroMark' element={<RetroMark />} />
          <Route exact path="/retroMarkPro" element={<RetroMarkPro />} />
          <Route exact path="/retroMarkExtreme" element={<RetroMarkExtreme />} />
          <Route exact path="/retroMarkUltra" element={<RetroMarkUltra />} />
          <Route exact path="/glassBeads" element={<GlassBeads /> } />

        </Routes>
        </Suspense>
        </AnimatePresence>
  )
}
