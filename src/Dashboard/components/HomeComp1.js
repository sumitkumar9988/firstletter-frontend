const Index = () => {
  return (
    <div className="py-4 w-full px-6">
      <img
        src="https://i.ibb.co/QkynWXF/peter-olexa-p-L7-Ire-X9-AGY-unsplash-10.png"
        alt="main"
        className="w-full h-full object-fit object-center"
      />
      <div className="xl:flex items-center justify-between md:pt-16 pt-8 xl:px-8">
        <h1 className="md:text-5xl text-2xl font-bold md:leading-none leading-6 text-indigo-400 xl:w-2/5">
          Stay on top of the curve <br />
          and always ahead{' '}
        </h1>
        <p className="md:text-xl text-lg leading-normal text-gray-50 2xl:pt-0 md:pt-6 pt-3 xl:w-3/5 xl:pl-20">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
        </p>
      </div>
    </div>
  );
};
export default Index;
