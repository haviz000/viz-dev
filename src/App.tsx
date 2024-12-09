import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Home = React.lazy(() => import("./pages/Homepage"));
const Timeline = React.lazy(() => import("./pages/TimelinePage"));
const Projects = React.lazy(() => import("./pages/ProjectsPage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
