import AuthCard from "../../components/auth/AuthCard";

export default function Register() {

  return (

    <AuthCard title="Create Your Account">

      <form className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-blue-500"
          />
        </div>


        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-blue-500"
          />
        </div>


        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Create password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-blue-500"
          />
        </div>


        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Create Account 🚀
        </button>


      </form>


      <p className="text-center mt-6 text-gray-600">

        Already have an account?

        <a
          href="/login"
          className="text-blue-600 ml-2 font-semibold"
        >
          Login
        </a>

      </p>


    </AuthCard>

  );
}
