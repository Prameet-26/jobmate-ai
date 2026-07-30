export default function ScoreCard() {

  return (

    <div className="bg-white rounded-xl shadow-md p-8 mt-8">


      <h2 className="text-2xl font-bold">
        📊 AI Resume Score
      </h2>


      <div className="flex items-center justify-center mt-6">

        <div className="w-32 h-32 rounded-full border-8 border-blue-600 flex items-center justify-center">

          <span className="text-4xl font-bold">
            92%
          </span>

        </div>

      </div>



      <p className="text-center text-gray-600 mt-5">
        Excellent profile! Your resume matches well
        with Cloud and DevOps roles.
      </p>



      <div className="mt-6 bg-blue-50 p-4 rounded-lg">


        <h3 className="font-bold">
          AI Feedback 🤖
        </h3>


        <ul className="mt-3 space-y-2">

          <li>
            ✅ Strong AWS experience
          </li>

          <li>
            ✅ Good CI/CD knowledge
          </li>

          <li>
            ⚠ Add more Kubernetes projects
          </li>


        </ul>


      </div>


    </div>

  );

}
