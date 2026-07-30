export default function Footer() {

  return (
    <footer className="bg-gray-900 text-white py-12 px-10">

      <div className="grid md:grid-cols-4 gap-8">


        <div>
          <h2 className="text-2xl font-bold">
            🚀 JobMate AI
          </h2>

          <p className="mt-3 text-gray-400">
            Career Command Center powered by AI.
          </p>
        </div>


        <div>
          <h3 className="font-bold">
            Product
          </h3>

          <p className="text-gray-400 mt-3">
            Resume Analyzer
          </p>

          <p className="text-gray-400">
            Job Search
          </p>

          <p className="text-gray-400">
            Interview AI
          </p>

        </div>


        <div>

          <h3 className="font-bold">
            Company
          </h3>

          <p className="text-gray-400 mt-3">
            About
          </p>

          <p className="text-gray-400">
            Contact
          </p>

          <p className="text-gray-400">
            Careers
          </p>

        </div>


        <div>

          <h3 className="font-bold">
            Community
          </h3>

          <p className="text-gray-400 mt-3">
            GitHub
          </p>

          <p className="text-gray-400">
            LinkedIn
          </p>

        </div>


      </div>


      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

        © 2026 JobMate AI. All rights reserved.

      </div>


    </footer>
  );
}
