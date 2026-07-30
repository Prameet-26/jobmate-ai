export default function Sidebar() {

  return (

    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        🚀 JobMate AI
      </h1>


      <nav className="space-y-5">

        <a
          href="/dashboard"
          className="block hover:text-blue-400"
        >
          📊 Dashboard
        </a>


        <a
          href="/jobs"
          className="block hover:text-blue-400"
        >
          💼 Jobs
        </a>


        <a
          href="/resume"
          className="block hover:text-blue-400"
        >
          📄 Resume Analyzer
        </a>


        <a
          href="/tracker"
          className="block hover:text-blue-400"
        >
          📌 Application Tracker
        </a>


        <a
          href="/interview"
          className="block hover:text-blue-400"
        >
          🤖 Interview Coach
        </a>


        <a
          href="/profile"
          className="block hover:text-blue-400"
        >
          👤 Profile
        </a>

      </nav>

    </aside>

  );
}
