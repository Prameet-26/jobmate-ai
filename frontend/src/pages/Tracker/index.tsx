import Sidebar from "../../components/dashboard/Sidebar";
import Column from "../../components/tracker/Column";


export default function Tracker() {


  const columns = [

    {
      title: "📨 Applied",

      applications: [

        {
          company: "Amazon",
          role: "DevOps Engineer",
          status: "Applied"
        },

        {
          company: "TCS",
          role: "Cloud Engineer",
          status: "Applied"
        }

      ]

    },


    {
      title: "🤝 Interview",

      applications: [

        {
          company: "Google",
          role: "Cloud Engineer",
          status: "Interview"
        }

      ]

    },


    {
      title: "🎉 Offer",

      applications: [

        {
          company: "Microsoft",
          role: "SRE Engineer",
          status: "Offer"
        }

      ]

    },


    {
      title: "❌ Rejected",

      applications: [

        {
          company: "Startup XYZ",
          role: "DevOps Engineer",
          status: "Rejected"
        }

      ]

    }

  ];



  return (

    <div className="flex bg-gray-100 min-h-screen">


      <Sidebar />



      <main className="flex-1 p-8">


        <h1 className="text-4xl font-bold">
          Application Tracker 📌
        </h1>


        <p className="text-gray-600 mt-2">
          Track and manage your job applications.
        </p>




        <div className="grid md:grid-cols-4 gap-6 mt-10">


          {columns.map((column) => (

            <Column

              key={column.title}

              title={column.title}

              applications={column.applications}

            />

          ))}


        </div>


      </main>


    </div>

  );

}
