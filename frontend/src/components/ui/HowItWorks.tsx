export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "📄",
      title: "Upload Resume",
      description:
        "Upload your resume and let AI understand your skills and experience.",
    },
    {
      number: "02",
      icon: "🤖",
      title: "AI Analysis",
      description:
        "Get resume score, missing skills, and improvement recommendations.",
    },
    {
      number: "03",
      icon: "💼",
      title: "Find Jobs",
      description:
        "Discover job opportunities matching your profile.",
    },
    {
      number: "04",
      icon: "🎯",
      title: "Crack Interviews",
      description:
        "Practice with AI-generated interview questions.",
    },
  ];

  return (
    <section className="py-20 px-10 bg-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        How JobMate AI Works
      </h2>


      <div className="grid md:grid-cols-4 gap-8">

        {steps.map((step) => (
          <div
            key={step.number}
            className="text-center p-6 rounded-xl shadow-md"
          >

            <div className="text-5xl">
              {step.icon}
            </div>

            <h3 className="text-xl font-bold mt-4">
              {step.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {step.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
