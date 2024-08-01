import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Quiz from './components/Quiz'
import Credits from './components/Credits'

const RouterComponent = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/credits" element={<Credits />} />
    </Routes>
  </Layout>
)

export default RouterComponent