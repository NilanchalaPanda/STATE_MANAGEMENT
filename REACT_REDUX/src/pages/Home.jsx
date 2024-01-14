import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col gap-y-2 text-center pt-5'>
        <h1 className='text-4xl mt-5'>Unbox Fashion, Unleash Style!</h1>
        <p className='text-secondary font-bold'>Products</p>
      </div>

      <section className='mx-5 md:ml-14'>
        <Products />
      </section>
    </div>
  );
};

export default Home;
