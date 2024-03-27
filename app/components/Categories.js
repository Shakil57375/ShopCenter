import React from "react";
import products from "../data/data.json";
import CategoryProduct from "./CategoryProduct";
import Link from "next/link";
const Categories = ({ category }) => {
    const CategoryBasedProducts = products.products.filter(
        (product) => product.category === category
    );
    return (
        <div>
            <main>
                <section class="w-11/12 lg:w-10/12 max-w-7xl  mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
                    <div class="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
                        <button class="hover:border-b border-black block h-6 box-border mt-4">
                            All
                        </button>
                        <Link
                            href={`/category/smartphones`}
                            class="hover:border-b border-black block h-6 box-border mt-5"
                        >
                            Smartphones
                        </Link>
                        <Link
                            href={`/category/laptops`}
                            class="hover:border-b border-black block h-6 box-border mt-5"
                        >
                            Laptops
                        </Link>
                        <Link
                            href={`/category/fragrances`}
                            class="hover:border-b border-black block h-6 box-border mt-5"
                        >
                            Fragrances
                        </Link>
                        <Link
                            href={`/category/skincare`}
                            class="hover:border-b border-black block h-6 box-border mt-5"
                        >
                            Skincare
                        </Link>
                        <Link
                            href={`/category/groceries`}
                            class="hover:border-b border-black block h-6 box-border mt-5"
                        >
                            Groceries
                        </Link>
                    </div>
                    <div class="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                        {CategoryBasedProducts.map((product) => (
                            <CategoryProduct
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Categories;
