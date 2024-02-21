import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UserAuth } from './store/Features/UserSlice'
import { Route, Routes } from 'react-router-dom'
import CustomLayout from './layout'
import FilePage from './pages/FilePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      dispatch(UserAuth())
    }
  }, [])

  if (isAuth) {
    return (
      <Routes>
        <Route element={<CustomLayout />}>
          <Route index element={<FilePage />} />
          <Route path='*' element={<>404</>} />
        </Route>
      </Routes>
    )
  }
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
    </Routes>
  )
}


export default App