"use client";
import React from "react";
import Link from "next/link";
import ProductData from "../data/data.json";
import ProductList from "../components/ProductList";
const Products = () => {
    return (
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
                {ProductData.products.map((product) => (
                    <Link key={product.id} href={`/Products/${product.id}`}>
                        <span>
                            <ProductList product={product} />
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Products;
