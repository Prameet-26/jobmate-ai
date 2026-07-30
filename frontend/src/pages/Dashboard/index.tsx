import Sidebar from "../../components/dashboard/Sidebar";
import StatCard from "../../components/dashboard/StatCard";
import ApplicationTable from "../../components/dashboard/ApplicationTable";
import AICoach from "../../components/dashboard/AICoach";


export default function Dashboard() {

  return (

    <div className="flex bg-gray-100 min-h-screen">


      <Sidebar />


      <main className="flex-1 p-8">


        {/* Welcome Section */}

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>


        <p className="text-gray-600 mt-2">
          Let's grow your career with JobMate AI.
        </p>



        {/* Career Summary */}

        <section className="grid md:grid-cols-3 gap-6 mt-10">


          <StatCard
            icon="📄"
            title="Resume Score"
            value="92%"
          />


          <StatCard
            icon="💼"
            title="Job Matches"
            value="120+"
          />


          <StatCard
            icon="📌"
            title="Applications"
            value="25"
          />


        </section>



        {/* Application Tracker */}

        <ApplicationTable />



        {/* AI Career Coach */}

        <AICoach />


      </main>


    </div>

  );
}
