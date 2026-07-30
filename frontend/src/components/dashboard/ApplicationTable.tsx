export default function ApplicationTable() {

  const applications = [
    {
      company: "Amazon",
      role: "DevOps Engineer",
      status: "Interview",
    },
    {
      company: "Google",
      role: "Cloud Engineer",
      status: "Applied",
    },
    {
      company: "Microsoft",
      role: "SRE Engineer",
      status: "Saved",
    },
  ];


  return (

    <div className="bg-white rounded-xl shadow-md p-6 mt-10">

      <h2 className="text-2xl font-bold mb-5">
        Recent Applications 📌
      </h2>


      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="py-3">
              Company
            </th>

            <th>
              Role
            </th>

            <th>
              Status
            </th>

          </tr>

        </thead>


        <tbody>

          {applications.map((app) => (

            <tr
              key={app.company}
              className="border-b"
            >

              <td className="py-3">
                {app.company}
              </td>

              <td>
                {app.role}
              </td>

              <td>
                {app.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}
