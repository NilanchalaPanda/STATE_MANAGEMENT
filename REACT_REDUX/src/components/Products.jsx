import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const ProductData = await response.json();

      console.log("DATA : ", ProductData);
      setProducts(ProductData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {products.map((singleProd) => {
        return (
          <div key={singleProd.id} className="bg-slate-600 p-4 rounded-3xl my-5 md:w-[430px]">
            <img
              className="h-[300px] object-contain mx-auto rounded-3xl mix-blend-overlay"
              src={singleProd.image}
              alt={singleProd.description}
            />
            <h1 className="mx-5 text-left pt-3 text-xl">{singleProd.title}</h1>

            <div className="pt-3 mx-5 text-center items-center flex justify-between">
              <p className="font-bold">₹{singleProd.price}</p>
              <button className="py-2 px-4 bg-secondary rounded-2xl">
                Wishlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
