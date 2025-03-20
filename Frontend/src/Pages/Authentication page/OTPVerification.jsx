import React, { useState } from 'react';

export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    alert(`Entered OTP: ${otp.join('')}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80">
        <h2 className="text-xl font-bold mb-2">Verify Your Account</h2>
        <p className="text-gray-600 text-sm mb-4">Enter the 4 digit code sent to the registered email id.</p>

        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Did not receive a code? <span className="text-blue-500 cursor-pointer">Resend</span>
        </p>

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Verify
        </button>

        <p className="text-red-500 text-xs mt-4">Don't share the verification code with anyone!</p>
      </div>
    </div>
  );
}
