import { FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage2() {
  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-gray-600 mb-6">Enter your credentials to access your account</p>

        <div className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full outline-none"
              />
            </div>
            <a href="#" className="text-blue-500 text-sm float-right mt-1">Forgot password?</a>
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-700">Remember me</label>
          </div>

          <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Sign in
          </button>

          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account? <a href="#" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1585435516476-bd92c7d4d9b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="h-full w-full flex justify-center items-center">
          <h2 className="text-white text-4xl font-bold text-center max-w-md">
            Connect with friends and the world around you
          </h2>
        </div>
      </div>
    </div>
  );
}
