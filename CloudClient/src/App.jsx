
const App = () => {
  return (
    <Routes>
      <Route element={<LayoutCustom />}>
        <Route index element={<DiscPage />} />
        <Route path="*" element={<>404</>} />
      </Route>
    </Routes>
  )
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  )
}


export default App