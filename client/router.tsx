import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Quiz from './components/Quiz'

const RouterComponent = () => (
  <Layout>
    <Routes>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Layout>
)

export default RouterComponent