const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto">
        Explore diverse job opportunities tailored to your skills. Start your career joruney today!
      </div>
      <div className="flex flex-col items-center w-64">
        <div className="p-2 bg-bright-sun-300 rounded-full">
            <img className="h-8 w-8" src="/Category/Digital Marketing.png" alt="" />
        </div>
        <div className="text-mine-shaft-100 text-xl font-semibold">Digital Marketting.</div>
        <div className="text-sm text-center text-mine-shaft-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa.</div>
        <div className="text-bright-sun-300 text-lg">1K+ new jobs posted</div>
      </div>
    </div>
  );
};

export default JobCategory;
