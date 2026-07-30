export default function FeedbackCard() {

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mt-8">


      <h2 className="text-2xl font-bold">
        🤖 AI Interview Feedback
      </h2>



      <div className="mt-5 bg-green-50 p-5 rounded-lg">


        <h3 className="text-xl font-bold">
          Score: 85%
        </h3>


        <p className="mt-3">
          Good understanding of DevOps concepts.
        </p>


      </div>



      <div className="mt-6">


        <h3 className="font-bold text-lg">
          ✅ Strengths
        </h3>


        <ul className="mt-3 space-y-2">

          <li>
            ✓ Good CI/CD pipeline knowledge
          </li>


          <li>
            ✓ Strong Docker understanding
          </li>


        </ul>


      </div>




      <div className="mt-6">


        <h3 className="font-bold text-lg">
          🚀 Improvements
        </h3>


        <ul className="mt-3 space-y-2">


          <li>
            ⚠ Add more Kubernetes troubleshooting examples
          </li>


          <li>
            ⚠ Explain AWS architecture with diagrams
          </li>


        </ul>


      </div>


    </div>

  );

}
