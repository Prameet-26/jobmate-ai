import Sidebar from "../../components/dashboard/Sidebar";
import UploadBox from "../../components/resume/UploadBox";
import ScoreCard from "../../components/resume/ScoreCard";
import SkillAnalysis from "../../components/resume/SkillAnalysis";


export default function Resume() {

  return (

    <div className="flex bg-gray-100 min-h-screen">


      <Sidebar />


      <main className="flex-1 p-8">


        <h1 className="text-4xl font-bold">
          AI Resume Analyzer 📄
        </h1>


        <p className="text-gray-600 mt-2">
          Improve your resume with AI-powered insights.
        </p>



        <UploadBox />


        <ScoreCard />


        <SkillAnalysis />


      </main>


    </div>

  );

}
