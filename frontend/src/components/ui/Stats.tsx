export default function Stats() {

  const stats = [
    {
      value: "10K+",
      label: "Jobs Tracked",
      icon: "💼",
    },
    {
      value: "95%",
      label: "Resume Improvement",
      icon: "📄",
    },
    {
      value: "500+",
      label: "Interview Questions",
      icon: "🤖",
    },
    {
      value: "24/7",
      label: "AI Career Support",
      icon: "🚀",
    },
  ];


  return (
    <section className="py-20 bg-blue-600 text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Helping Professionals Grow Faster
      </h2>


      <div className="grid md:grid-cols-4 gap-8 px-10">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center bg-white/10 rounded-xl p-6"
          >

            <div className="text-4xl">
              {stat.icon}
            </div>

            <h3 className="text-4xl font-bold mt-4">
              {stat.value}
            </h3>

            <p className="mt-2 text-blue-100">
              {stat.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
