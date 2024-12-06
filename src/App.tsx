import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Homepage"));
const Timeline = React.lazy(() => import("./pages/TimelinePage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
