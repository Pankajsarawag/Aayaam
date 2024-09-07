import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import ContactUs from './components/contact-us';
import Home from './components/home';
import AboutUs from './components/about-us';
import Footer from './components/footer';

function App() {
  const items = [
    {
      name: "The NITT Students' Council",
      description: "The Students’ Council of NITT consists of the elected body of students from different branches and batches. It works in the leadership of a President, a Vice-President, a Secretary and a Joint Secretary. The duration of the Council is one full academic year. The Council is also supported by committees such as Incident Committee, Engineer Committee, which coordinate major students’ festivals of the Institute.",
      image: "/img1.jpeg"
    },
    {
      name: "The NITT Students' Council",
      description: "The Students’ Council of NITT consists of the elected body of students from different branches and batches. It works in the leadership of a President, a Vice-President, a Secretary and a Joint Secretary. The duration of the Council is one full academic year. The Council is also supported by committees such as Incident Committee, Engineer Committee, which coordinate major students’ festivals of the Institute.",
      image: "/img2.jpeg"
    },
    {
      name: "The NITT Students' Council",
      description: "The Students’ Council of NITT consists of the elected body of students from different branches and batches. It works in the leadership of a President, a Vice-President, a Secretary and a Joint Secretary. The duration of the Council is one full academic year. The Council is also supported by committees such as Incident Committee, Engineer Committee, which coordinate major students’ festivals of the Institute.",
      image: "/img3.jpeg"
    }
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home id="home" items={items} />
              <AboutUs id="about-us" />
              {/* <Highlights id="highlights" /> */}
            </>
          }
        />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
