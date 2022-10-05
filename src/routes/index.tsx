import { Routes, Route } from 'react-router-dom'
import Posts from '../pages/Posts'
import React from 'react'

const Router: React.FC = () => (
  <Routes>
    {/* <Route path="/"> */}
    <Route path="/" element={<Posts />} />
    {/* <Route path="/history" element={<History />} /> */}
    {/* </Route> */}
  </Routes>
)

export { Router }
