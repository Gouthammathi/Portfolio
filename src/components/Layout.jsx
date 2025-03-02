import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';

const Layout = ({ children }) => {
    return (
        <div style={{ backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
            <Header />
            <main className="relative z-0">
                <Home />
                <About/>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
