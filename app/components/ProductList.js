const ProductList = ({ product }) => {
    return (
        <>
            <div
                className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] transition-all duration-3000 ease-in-out transform"
                style={{
                    backgroundImage: `url(${product.thumbnail} )`,
                    backgroundSize: "cover",
                    backgroundPosition : "center"
                }}
            ></div>
            <h2 className="text-sm lg:text-base mt-2">
                <p className="text-base font-bold" href="./productPage.html">
                    {product.title}
                </p>
                <span className="text-[#919090]">
                    <p>{product.category}</p>
                </span>
            </h2>
            <p className="text-[#919090] text-sm ">{product.description}</p>

            <p className="text-rose-600 text-sm mt-4">
                <span className="text-[#919090] line-through">
                    {product?.price}
                </span>{" "}
                {product?.discountPercentage}
            </p>
        </>
    );
};

export default ProductList;
