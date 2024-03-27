import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NewsLatter from "./components/NewsLatter";
import Footer from "./components/Footer";
import Products from "./Products/Products";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Products />
            <NewsLatter />
            <Footer />
        </div>
    );
};

export default Home;
