import Categories from "@/app/components/Categories";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import NewsLatter from "@/app/components/NewsLatter";
import React from "react";

const SpecificCategoryProduct = ({ params }) => {
    const category = params.categoryName
    return (
        <div>
            <Navbar />
            <Header />
            <Categories category = {category} />
            <NewsLatter />
            <Footer />
        </div>
    );
};

export default SpecificCategoryProduct;
