export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">

      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <h1 className="text-6xl font-extrabold leading-tight">
            Search Smarter.
            <br />
            Apply Better.
            <br />
            Grow Faster.
          </h1>


          <p className="mt-6 text-xl text-blue-100">
            JobMate AI is your intelligent career assistant
            that helps you find jobs, improve your resume,
            and prepare for interviews.
          </p>


          <div className="mt-8 flex gap-5">

            <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">
              Start Free 🚀
            </button>


            <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-700">
              Explore Features
            </button>

          </div>

        </div>


        {/* AI Dashboard Card */}
        <div className="flex justify-center">

          <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-8 w-80">

            <div className="text-6xl text-center">
              🤖
            </div>


            <h2 className="text-2xl font-bold text-center mt-4">
              AI Career Assistant
            </h2>


            <div className="mt-6 space-y-4">


              <div className="bg-blue-50 p-4 rounded-xl">
                📄 Resume Score
                <strong className="block text-xl">
                  92%
                </strong>
              </div>


              <div className="bg-purple-50 p-4 rounded-xl">
                💼 Matching Jobs
                <strong className="block text-xl">
                  120+
                </strong>
              </div>


              <div className="bg-indigo-50 p-4 rounded-xl">
                🎯 Interview Ready
                <strong className="block text-xl">
                  85%
                </strong>
              </div>


            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
