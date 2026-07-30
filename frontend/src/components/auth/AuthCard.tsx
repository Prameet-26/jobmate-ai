interface AuthCardProps {
  title: string;
  children: React.ReactNode;
}


export default function AuthCard({
  title,
  children,
}: AuthCardProps) {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          🚀 JobMate AI
        </h1>


        <h2 className="text-xl font-semibold text-center mb-6">
          {title}
        </h2>


        {children}

      </div>

    </div>
  );
}
