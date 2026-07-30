import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/ui/Hero";
import FeatureCard from "../../components/ui/FeatureCard";
import HowItWorks from "../../components/ui/HowItWorks";
import Stats from "../../components/ui/Stats";
import Footer from "../../components/layout/Footer";

export default function Home() {

  return (

    <div>

      <Navbar />

      <Hero />

      <HowItWorks />


      <section className="py-20 px-10 bg-gray-50">

        <h2 className="text-4xl font-bold text-center mb-12">
          Everything You Need To Build Your Career
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          <FeatureCard
            icon="📄"
            title="AI Resume Analyzer"
            description="Get AI-powered resume feedback and improvement suggestions."
          />


          <FeatureCard
            icon="💼"
            title="Smart Job Search"
            description="Find jobs matched with your skills and experience."
          />


          <FeatureCard
            icon="🤖"
            title="AI Interview Coach"
            description="Practice interviews with intelligent AI questions."
          />

        </div>

      </section>


      <Stats />

      <Footer />


    </div>

  );
}
