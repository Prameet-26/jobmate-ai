interface StatCardProps {
  title: string;
  value: string;
  icon: string;
}


export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {

  return (

    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="text-4xl">
        {icon}
      </div>


      <h3 className="text-gray-500 mt-4">
        {title}
      </h3>


      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>

  );
}
