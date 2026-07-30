export default function UploadBox() {

  return (

    <div className="bg-white rounded-xl shadow-md p-8 text-center">


      <h2 className="text-2xl font-bold">
        📄 Upload Your Resume
      </h2>


      <p className="text-gray-600 mt-3">
        Upload your resume and let AI analyze your skills,
        experience, and improvement areas.
      </p>



      <div className="mt-6">

        <input
          type="file"
          className="border rounded-lg p-3 w-full"
        />


      </div>



      <button
        className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Analyze Resume 🚀
      </button>


    </div>

  );
}
