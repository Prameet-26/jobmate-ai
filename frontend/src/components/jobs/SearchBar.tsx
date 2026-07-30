export default function SearchBar() {

  return (

    <div className="bg-white rounded-xl shadow-md p-6">


      <h2 className="text-2xl font-bold">
        🔍 Find Your Dream Job
      </h2>


      <p className="text-gray-600 mt-2">
        Search jobs matched with your skills and experience.
      </p>



      <div className="flex gap-4 mt-6">


        <input
          type="text"
          placeholder="Search role, skill, or company..."
          className="flex-1 border rounded-lg px-4 py-3 focus:outline-blue-500"
        />


        <button
          className="bg-blue-600 text-white px-8 rounded-lg font-semibold hover:bg-blue-700"
        >
          Search 🔍
        </button>


      </div>


    </div>

  );

}
