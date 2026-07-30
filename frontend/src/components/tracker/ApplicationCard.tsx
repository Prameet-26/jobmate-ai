interface ApplicationCardProps {
  company: string;
  role: string;
  status: string;
}


export default function ApplicationCard({
  company,
  role,
  status,
}: ApplicationCardProps) {

  return (

    <div className="bg-white rounded-lg shadow p-4">


      <h3 className="font-bold text-lg">
        {company}
      </h3>


      <p className="text-gray-600">
        {role}
      </p>



      <div className="mt-3">

        <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">

          {status}

        </span>

      </div>


    </div>

  );

}
