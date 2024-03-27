const CategoryProduct = ({ product }) => {
    return (
        <div>
            <div
                class="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8]  transition-all duration-3000 ease-in-out transform"
                style={{
                    backgroundImage: `url(${product.thumbnail} )`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
            <h2 class="text-sm lg:text-base mt-2">
                <p class="text-base font-bold" href="./productPage.html">
                    {product.title}
                </p>
                <span class="text-[#3f3a3a]">
                    <p href="./category.html">({product.category})</p>
                </span>
            </h2>
            <p class="text-[#919090] text-sm ">{product.description}</p>

            <p class="text-rose-600 text-sm mt-4">
                <span class="text-[#919090] line-through">
                    ${product.price}
                </span>{" "}
                ${product.discountPercentage}
            </p>
        </div>
    );
};

export default CategoryProduct;
