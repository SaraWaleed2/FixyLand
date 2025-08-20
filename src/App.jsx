import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import { CssBaseline } from '@mui/material';
import TopHeader from './Components/Layout/Header/TopHeader';
import Footer from './Components/Layout/Footer/Footer';


function App() {
  return (
    <>

      <CssBaseline />
      <TopHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
