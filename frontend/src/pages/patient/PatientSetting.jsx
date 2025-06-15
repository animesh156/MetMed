import React, { useState } from 'react';

function PatientSetting() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    alert('Password changed!');
  };

  const handleLogout = () => {
    alert('Logged out!');
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-neutral-800 border border-neutral-700 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Patient Settings</h2>

      {/* Profile Update Form */}
      <form onSubmit={handleProfileUpdate} className="mb-8">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Update Profile</h3>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>

      {/* Password Update Form */}
      <form onSubmit={handlePasswordChange} className="mb-8">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Change Password</h3>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">New Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Update Password
        </button>
      </form>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white w-full py-2 px-4 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default PatientSetting;
