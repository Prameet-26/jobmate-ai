import Sidebar from "../../components/dashboard/Sidebar";

import ProfileCard from "../../components/profile/ProfileCard";
import Skills from "../../components/profile/Skills";
import Progress from "../../components/profile/Progress";


export default function Profile() {

  return (

    <div className="flex bg-gray-100 min-h-screen">


      <Sidebar />



      <main className="flex-1 p-8">


        <h1 className="text-4xl font-bold">
          My Profile 👤
        </h1>


        <p className="text-gray-600 mt-2">
          Manage your career profile and skills.
        </p>



        <ProfileCard />


        <Skills />


        <Progress />


      </main>


    </div>

  );

}
