export default function QuestionCard() {

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mt-8">


      <h2 className="text-2xl font-bold">
        🤖 AI Interview Question
      </h2>



      <div className="mt-5 bg-blue-50 p-5 rounded-lg">


        <p className="font-semibold">
          Question 1:
        </p>


        <p className="mt-3">
          Explain how you design a CI/CD pipeline
          using Jenkins, Docker, and Kubernetes.
        </p>


      </div>



      <textarea

        placeholder="Write your answer here..."

        className="w-full mt-6 border rounded-lg p-4 h-32"

      />



      <button

        className="mt-5 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700"

      >

        Submit Answer ✅

      </button>


    </div>

  );

}
