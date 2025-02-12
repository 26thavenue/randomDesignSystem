import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center">
      <h1 className="text-5xl font-bold text-red-600">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700 mt-4">
        An unexpected error occurred. Please try again later.
      </p>
      <Link to="/" className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
