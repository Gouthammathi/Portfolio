import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../Pages/Home';

const Layout = () => {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main className="relative z-0">
                <Home />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
