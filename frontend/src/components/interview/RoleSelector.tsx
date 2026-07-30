export default function RoleSelector() {

  return (

    <div className="bg-white rounded-xl shadow-md p-6">


      <h2 className="text-2xl font-bold">
        🎯 Choose Interview Role
      </h2>


      <p className="text-gray-600 mt-2">
        Select the role you want to practice.
      </p>



      <select
        className="w-full mt-6 border rounded-lg px-4 py-3"
      >

        <option>
          DevOps Engineer
        </option>


        <option>
          AWS Cloud Engineer
        </option>


        <option>
          Kubernetes Administrator
        </option>


        <option>
          Site Reliability Engineer
        </option>


        <option>
          Data Analyst
        </option>


      </select>



      <button
        className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Start Interview 🚀
      </button>


    </div>

  );

}
