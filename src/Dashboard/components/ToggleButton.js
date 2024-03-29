const toggle = ({ checked }) => {
  return (
    <div className="mx-auto  flex flex-col items-center">
      <div className="cursor-pointer my-5 rounded-full bg-gray-200 relative shadow-sm">
        <input
          defaultChecked={checked}
          type="checkbox"
          name="toggle"
          id="toggle1"
          className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
        />
        <label
          htmlFor="toggle1"
          className="toggle-label dark:bg-gray-700 block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
        />
      </div>

      {/* Code block ends */}
      <style>
        {`.checkbox:checked {
                    /* Apply class right-0*/
                    right: 0;
                }
                .checkbox:checked + .toggle-label {
                    /* Apply class bg-indigo-700 */
                    background-color: #4c51bf;
                }`}
      </style>
    </div>
  );
};
export default toggle;

// defaultChecked
