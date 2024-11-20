import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { Home, Login, Register, Activation, MyProfile, EditProfile, Explore, PostDetail, NotFound } from './pages'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Layout> <Home/> </Layout>} exact />
          <Route path='/login' element={ <Login/> } exact />
          <Route path='/register' element={ <Register/> } exact />
          <Route path='/me' element={ <MyProfile /> } exact />
          <Route path='profile/edit' element={ <EditProfile /> } exact />
          <Route path='/explore' element={ <Explore /> } exact />
          <Route path="/activate/:uid/:token/" element={<Activation />} exact />
          <Route path="explore/post/:slug/" element={<PostDetail />} exact />
          <Route path="*" element={<NotFound />} exact/>
        </Routes>
      </div>
    </Router>
  )
}

export default App