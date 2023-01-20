import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Erro from './pages/Erro';
import Home from './pages/Home';

function RouteApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='*' element={ <Erro/> }/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RouteApp;