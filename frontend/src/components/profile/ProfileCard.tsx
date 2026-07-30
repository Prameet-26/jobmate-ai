export default function ProfileCard() {

  return (

    <div className="bg-white rounded-xl shadow-md p-8">


      <div className="flex items-center gap-5">


        <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-4xl">

          👤

        </div>



        <div>

          <h2 className="text-3xl font-bold">
            Prameet Kumar
          </h2>


          <p className="text-gray-600 mt-2">
            Cloud / DevOps Engineer
          </p>


        </div>


      </div>




      <div className="mt-8">


        <h3 className="text-xl font-bold">
          Career Goal 🎯
        </h3>


        <p className="text-gray-600 mt-2">
          Building expertise in AWS, Kubernetes,
          DevOps automation, and Cloud Security.
        </p>


      </div>




      <button

        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"

      >

        Edit Profile ✏️

      </button>


    </div>

  );

}
