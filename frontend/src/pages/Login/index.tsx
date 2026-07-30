import AuthCard from "../../components/auth/AuthCard";

export default function Login() {

  return (

    <AuthCard title="Welcome Back">

      <form className="space-y-5">


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
            placeholder="Enter your password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-blue-500"
          />

        </div>



        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Login 🚀
        </button>


      </form>


      <p className="text-center mt-6 text-gray-600">

        New to JobMate AI?

        <a
          href="/register"
          className="text-blue-600 ml-2 font-semibold"
        >
          Create Account
        </a>

      </p>


    </AuthCard>

  );
}
