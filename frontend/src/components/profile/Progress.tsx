export default function Progress() {

  const progress = [

    {
      title: "Resume Score",
      value: "92%"
    },

    {
      title: "Interview Ready",
      value: "85%"
    },

    {
      title: "Job Match",
      value: "90%"
    }

  ];


  return (

    <div className="bg-white rounded-xl shadow-md p-8 mt-8">


      <h2 className="text-2xl font-bold">
        📈 Career Progress
      </h2>



      <div className="space-y-6 mt-6">


        {progress.map((item) => (

          <div key={item.title}>


            <div className="flex justify-between mb-2">


              <span className="font-semibold">
                {item.title}
              </span>


              <span className="font-bold">
                {item.value}
              </span>


            </div>



            <div className="w-full bg-gray-200 rounded-full h-3">


              <div

                className="bg-blue-600 h-3 rounded-full"

                style={{
                  width: item.value
                }}

              ></div>


            </div>


          </div>

        ))}


      </div>


    </div>

  );

}
