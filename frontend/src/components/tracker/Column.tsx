import ApplicationCard from "./ApplicationCard";


interface ColumnProps {

  title: string;

  applications: {
    company: string;
    role: string;
    status: string;
  }[];

}



export default function Column({
  title,
  applications,
}: ColumnProps) {


  return (

    <div className="bg-gray-200 rounded-xl p-5">


      <h2 className="text-xl font-bold mb-5">
        {title}
      </h2>



      <div className="space-y-4">


        {applications.map((app) => (

          <ApplicationCard

            key={app.company}

            company={app.company}

            role={app.role}

            status={app.status}

          />

        ))}


      </div>


    </div>

  );

}
