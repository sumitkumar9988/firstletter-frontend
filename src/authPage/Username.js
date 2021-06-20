const Index = () => (
  <div className="h-screen">
    <div className="relative">
      <div className="absolute   inset-y-0 right-0 mr-8">
        <button onclick="popuphandler(false)" className="focus:outline-none text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-14 w-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div className="flex items-center justify-center py-24   ">
      <div className="md:w-80 max-w-xs rounded shadow-lg p-6   bg-white">
        <h1 className=" text-gray-800 font-bold text-lg">Security Key</h1>
        <p className="pb-4 text-sm pt-4 font-normal   text-gray-600">
          Security key generated, copy and paste to use it
        </p>
        <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-between p-4">
          <input className="text-base font-medium leading-6  bg-gray-100 text-gray-800" />
          <div className="cursor-pointer text-xs font-semibold leading-4 text-indigo-700 uppercase">Enter</div>
        </div>
      </div>
    </div>
  </div>
);
export default Index;
