export default function Skills() {

  const skills = [

    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "Linux"

  ];


  return (

    <div className="bg-white rounded-xl shadow-md p-8 mt-8">


      <h2 className="text-2xl font-bold">
        🛠 Technical Skills
      </h2>



      <div className="flex flex-wrap gap-3 mt-6">


        {skills.map((skill) => (

          <span

            key={skill}

            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold"

          >

            ✓ {skill}

          </span>

        ))}


      </div>


    </div>

  );

}
