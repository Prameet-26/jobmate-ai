import Sidebar from "../../components/dashboard/Sidebar";
import SearchBar from "../../components/jobs/SearchBar";
import JobCard from "../../components/jobs/JobCard";


export default function Jobs() {

  const jobs = [

    {
      company: "Amazon",
      role: "DevOps Engineer",
      match: "95%",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins"
      ]
    },


    {
      company: "Google",
      role: "Cloud Engineer",
      match: "88%",
      skills: [
        "AWS",
        "Terraform",
        "Linux"
      ]
    },


    {
      company: "Microsoft",
      role: "Site Reliability Engineer",
      match: "90%",
      skills: [
        "Azure",
        "Kubernetes",
        "CI/CD"
      ]
    }

  ];



  return (

    <div className="flex bg-gray-100 min-h-screen">


      <Sidebar />


      <main className="flex-1 p-8">


        <h1 className="text-4xl font-bold">
          Smart Job Search 💼
        </h1>


        <p className="text-gray-600 mt-2">
          AI-powered job matching based on your skills.
        </p>



        <SearchBar />



        <section className="grid md:grid-cols-3 gap-6 mt-10">


          {jobs.map((job) => (

            <JobCard
              key={job.company}
              company={job.company}
              role={job.role}
              match={job.match}
              skills={job.skills}
            />

          ))}


        </section>


      </main>


    </div>

  );

}
