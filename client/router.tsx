import { Route, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Quiz from './components/Quiz'
import Credits from './components/Credits'
//! Major help from Gerad
export default createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/quiz" element={<Quiz />} />
    <Route path="/credits" element={<Credits />} />
  </Route>,
)
