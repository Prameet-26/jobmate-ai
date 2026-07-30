export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">
        JobMate AI
      </h1>

      <div className="flex items-center gap-6">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>

        <a href="/jobs" className="hover:text-blue-600">
          Jobs
        </a>

        <a href="/login" className="hover:text-blue-600">
          Login
        </a>

        <a
          href="/register"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
