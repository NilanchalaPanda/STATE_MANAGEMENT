function Features() {
  return (
    <div className="">
      <p className="text-slate-200/50 text-center">DailyDress Features</p>
      <h1 className="text-4xl font-bold text-slate-200 text-center md:text-6xl md:mb-10">
        Wear With Confidence
      </h1>
      <div className="mt-5 mx-5 grid grid-cols-1 md:grid-cols-3 gap-y-5 md:flex-row md:mx-auto md:gap-x-5 md:w-[80%]">
        <div className="bg-tertiary p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10">
          {/* <img
            className="w-[100px]"
            src="./images/LOCK.png"
            alt="Write about your placemnt experiences"
          /> */}
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
            Exclusive Designs
          </h2>
          <p>
            Discover the latest trends and exclusive designs in premium fashion.
            Our curated collection ensures that you stand out in style with
            unique and high-quality clothing options.
          </p>
        </div>

        <div className="bg-tertiary p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10">
          {/* <img
            className="w-[110px] -mt-2"
            src="./images/accessLayer.png"
            alt="Write about your placemnt experiences"
          /> */}
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
            Premium Fabrics
          </h2>
          <p>
            Indulge in luxury with our premium fabric selections. Each piece is
            crafted with attention to detail using the finest materials,
            ensuring comfort, durability, and a touch of sophistication.
          </p>
        </div>

        <div className="bg-tertiary p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10">
          {/* <img
            className="w-[100px]"
            src="./images/IPFS.png"
            alt="Write about your placemnt experiences"
          /> */}
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
            Personalized Style
          </h2>
          <p>
            Express yourself with our personalized style options. From casual to
            formal, find the perfect attire that suits your taste and
            complements your unique fashion sense.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
