import './App.css';
import './style/glowbtn.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JobSupport from './pages/JobSupport';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inqueries from './pages/Request';
import NavScrollExample from './Component/NavBar';
import PagenotFound from './pages/PageNotFoun';
import StudentReq from './pages/StudentReq';

function App() {
        return (
                <BrowserRouter>
                        <NavScrollExample />
                        <Routes>

                                <Route path='/' element={<Home />} />
                                <Route path='/job' element={<JobSupport />} />
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/request' element={<Inqueries/>} />
                                <Route path='/studentreq/:requestId' element={<StudentReq/>} />
                                <Route path='*' element={<PagenotFound/>} />

                        </Routes>
                </BrowserRouter>
        );
}

export default App;


// SPA--single page application
// React js  ---> Next js