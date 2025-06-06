import React, { useState } from 'react';

function PatientSetting() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Call API to update profile
    alert('Profile updated successfully!');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Call API to update password
    alert('Password changed!');
  };

  const handleLogout = () => {
    // Clear cookie/session & navigate to login
    alert('Logged out!');
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Patient Settings</h2>

      {/* Profile Update Form */}
      <form onSubmit={handleProfileUpdate} className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Update Profile</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>

      {/* Password Update Form */}
      <form onSubmit={handlePasswordChange} className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Change Password</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning">Update Password</button>
      </form>

      {/* Logout */}
      <button onClick={handleLogout} className="btn btn-error w-full">
        Logout
      </button>
    </div>
  );
}

export default PatientSetting;
