interface JobCardProps {
  company: string;
  role: string;
  match: string;
  skills: string[];
}


export default function JobCard({
  company,
  role,
  match,
  skills,
}: JobCardProps) {

  return (

    <div className="bg-white rounded-xl shadow-md p-6">


      <h2 className="text-2xl font-bold">
        {company}
      </h2>


      <h3 className="text-lg text-gray-700 mt-2">
        {role}
      </h3>



      <div className="mt-4 bg-green-50 p-3 rounded-lg">

        <p className="font-bold">
          🎯 Match Score: {match}
        </p>

      </div>



      <div className="mt-4">


        <h4 className="font-semibold">
          Skills Match:
        </h4>


        <div className="flex flex-wrap gap-2 mt-3">


          {skills.map((skill) => (

            <span
              key={skill}
              className="bg-blue-100 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>

          ))}


        </div>


      </div>



      <button
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Apply Now 🚀
      </button>


    </div>

  );

}
