import Navbar from "../../components/layout/Navbar";
import FeatureCard from "../../components/ui/FeatureCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <section className="text-center py-20 px-6">

        <h1 className="text-5xl font-bold text-gray-900">
          Search Smarter.
          <br />
          Apply Better.
          <br />
          Grow Faster.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          AI-powered career assistant that helps you find jobs,
          improve your resume, and prepare for interviews.
        </p>


        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg">
          Start Your Career Journey 🚀
        </button>

      </section>


      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">

        <FeatureCard
          icon="📄"
          title="AI Resume Analyzer"
          description="Analyze your resume and get improvement suggestions."
        />


        <FeatureCard
          icon="💼"
          title="Smart Job Search"
          description="Find relevant jobs based on your skills."
        />


        <FeatureCard
          icon="🤖"
          title="AI Interview Coach"
          description="Practice interviews with AI-generated questions."
        />

      </section>

    </div>
  );
}
