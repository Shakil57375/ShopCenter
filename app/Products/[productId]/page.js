"use client";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import products from "../../data/data.json";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ params }) => {
    const { productId } = params;
    const id = parseInt(productId);
    const product = products.products.find((product) => product.id === id);
    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        category,
        thumbnail,
        images,
    } = product;

    const [selectedImage, setSelectedImage] = useState(thumbnail);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    return (
        <div>
            <Navbar />
            <main className="h-screen">
                <section className="bg-[#fafaf2] h-full py-20">
                    <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
                        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
                            <Image
                                src={selectedImage}
                                alt="thumbnail image"
                                width={400}
                                height={500}
                                className="w-[400px] h-[500px] mx-auto object-cover"
                            />
                            <div className="flex gap-4 mt-4">
                                {images.map((imageUrl, index) => (
                                    <div
                                        key={index}
                                        onClick={() =>
                                            handleImageClick(imageUrl)
                                        }
                                    >
                                        <Image
                                            src={imageUrl}
                                            width={100}
                                            height={100}
                                            className="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer"
                                            alt={`Product Image ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-5/12">
                            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                                {title}
                            </h1>
                            <Link
                                href={`/category/${category}`}
                                className="text-[#919090] my-3"
                            >
                                {category}
                            </Link>
                            <div className="mt-3 flex items-center justify-start gap-1">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                            <hr className="my-5 bg-black" />

                            <div>
                                <p className="my-3">
                                    <span className="text-rose-600 opacity-60 line-through">
                                        ${price}
                                    </span>
                                    <span className="font-bold text-2xl">
                                        ${discountPercentage}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p className="leading-7">{description}</p>

                                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                                    Add To Cart - ${discountPercentage}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SingleProduct;
