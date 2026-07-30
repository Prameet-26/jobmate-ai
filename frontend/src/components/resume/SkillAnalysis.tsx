export default function SkillAnalysis() {

  return (

    <div className="bg-white rounded-xl shadow-md p-8 mt-8">


      <h2 className="text-2xl font-bold">
        🧠 Skill Analysis
      </h2>



      <div className="grid md:grid-cols-2 gap-6 mt-6">


        <div className="bg-green-50 p-5 rounded-lg">


          <h3 className="font-bold text-lg">
            ✅ Skills Found
          </h3>


          <ul className="mt-4 space-y-2">

            <li>
              ✅ AWS Cloud
            </li>

            <li>
              ✅ Docker
            </li>

            <li>
              ✅ Kubernetes
            </li>

            <li>
              ✅ Jenkins CI/CD
            </li>


          </ul>


        </div>




        <div className="bg-yellow-50 p-5 rounded-lg">


          <h3 className="font-bold text-lg">
            ⚠ Missing Skills
          </h3>


          <ul className="mt-4 space-y-2">


            <li>
              ⚠ Terraform
            </li>


            <li>
              ⚠ Python Automation
            </li>


            <li>
              ⚠ Cloud Security
            </li>


          </ul>


        </div>


      </div>


    </div>

  );

}
