import Sidebar from "../../components/dashboard/Sidebar";

import RoleSelector from "../../components/interview/RoleSelector";
import QuestionCard from "../../components/interview/QuestionCard";
import FeedbackCard from "../../components/interview/FeedbackCard";


export default function Interview() {

  return (

    <div className="flex bg-gray-100 min-h-screen">


      <Sidebar />


      <main className="flex-1 p-8">


        <h1 className="text-4xl font-bold">
          AI Interview Coach 🤖
        </h1>


        <p className="text-gray-600 mt-2">
          Practice interviews and improve your answers with AI feedback.
        </p>



        <RoleSelector />



        <QuestionCard />



        <FeedbackCard />


      </main>


    </div>

  );

}
