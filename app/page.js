import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NewsLatter from "./components/NewsLatter";
import Link from "next/link";
import ProductData from "./data/data.json";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
                    {ProductData.products.map((product) => (
                        <ProductList key={product.id} product={product} />
                    ))}
                </div>
            </section>
            <NewsLatter />
            <Footer/>
        </div>
    );
};

export default Home;
