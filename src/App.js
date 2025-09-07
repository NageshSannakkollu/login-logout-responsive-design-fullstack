import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Slide, ToastContainer } from "react-toastify"
import Dashboard from './components/Dashboard'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
  <ToastContainer position='top-center' autoClose={600} hideProgressBar={true} transition={Slide}/>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
