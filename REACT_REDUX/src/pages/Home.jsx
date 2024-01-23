import React from "react";

const Home = () => {
  return (
    <div className="mx-10 mt-10 md:mx-10">
      <section className="flex flex-col md:flex-row justify-evenly pt-5 px-2 pb-0 bg-secondary/20 rounded-3xl md:mx-20 md:p-10 md:pb-0">
        <h1 className="flex items-center justify-center text-5xl font-black leading-[125%] sm:text-5xl md:text-[96px] md:leading-[125%]">
          LET’S
          <br /> EXPLORE <br />
          UNIQUE
          <br /> CLOTHES.
        </h1>

        <div className="md:w-[600px]">
          <img src="./Shopping-Banner.png" alt="BANNER IMAGE" />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-[121px] my-16 bg-primary py-[61px] md:flex-row">
        <div className="w-[118px]">
          <img src="./brands/hm.png" alt="HM BRANd" srcset="" />
        </div>
        <div className="w-[150px]">
          <img src="./brands/obey.png" alt="OBEY BRAND" srcset="" />
        </div>
        <div className="w-[176px]">
          <img src="./brands/shopify.png" alt="SHOPIFY BRAND" srcset="" />
        </div>
        <div className="w-[150px]">
          <img src="./brands/lacoste.png" alt="LACOSTE BRAND" srcset="" />
        </div>
        <div className="w-[127px]">
          <img src="./brands/levis.png" alt="LEVIS BRAND" />
        </div>
      </section>
    </div>
  );
};

export default Home;

{
  /* <h1 className="text-4xl font-black leading-[125%] sm:text-5xl md:text-[96px] md:leading-[125%]">
  <span className="relative after:w-[190%] after:h-full after:bg-white after:block after:absolute after:-z-10 after:top-0 after:-rotate-2">
    LET’S
  </span>{" "}
  <br /> EXPLORE <br />
  <span className="relative after:w-[120%] after:h-full after:bg-primary after:block after:absolute after:-z-10 after:top-0 after:-rotate-2">
    UNIQUE
  </span>{" "}
  <br /> CLOTHES.
</h1>; */
}

{
  /* <a className="bg-black text-white rounded-md py-4 px-4 text-center" href="#">
  Shop Now
</a>; */
}
