import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contacts from './components/aboutComponents/Contacts/Contacts'
import Education from './components/aboutComponents/Education'
import Hero from './components/aboutComponents/Hero'
import Sertificates from './components/aboutComponents/Sertificates'
import WorkExp from './components/aboutComponents/WorkExp'
import Blog from './components/Blog'
import NotFound from './components/NotFound'
import SinglePost from './components/SinglePost'
import Footer from './layouts/Footer'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Blog />} />
            <Route path=":postSlug" element={<SinglePost />} />
            <Route path="about" element={<About />}>
              <Route path="hero" element={<Hero />}></Route>
              <Route path="education" element={<Education />}></Route>
              <Route path="experience" element={<WorkExp />}></Route>
              <Route path="sertificates" element={<Sertificates />}></Route>
              <Route path="contacts" element={<Contacts />}></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
