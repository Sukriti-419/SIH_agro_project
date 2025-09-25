import { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from '../supabaseClient';

const Registration = () => {
  const [role, setRole] = useState('user');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    organization: '',
    userRole: 'Student',
    adminCode: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
    setForm({ ...form, adminCode: '' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            name: form.name,
            organization: form.organization,
            userRole: form.userRole,
            role,
            adminCode: form.adminCode,
          }
        }
      });

      if (error) {
        setMessage(error.message);
      } else if (data?.user) {
        setMessage('Registration successful! Please check your email to verify your account.');
        setForm({ name: '', email: '', password: '', organization: '', userRole: 'Student', adminCode: '' });
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (err) {
      setMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Register as {role === 'admin' ? 'Admin' : 'User'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="user"
              checked={role === 'user'}
              onChange={handleRoleChange}
              className="accent-blue-600"
            />
            <span className="font-medium">User</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === 'admin'}
              onChange={handleRoleChange}
              className="accent-blue-600"
            />
            <span className="font-medium">Admin</span>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
            <input
              type="text"
              name="organization"
              placeholder="Organization"
              value={form.organization}
              onChange={handleChange}
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
            />
          </div>
          {/* Hide userRole select if admin */}
          {role !== 'admin' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <select
                name="userRole"
                value={form.userRole}
                onChange={handleSelectChange}
                className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
              >
                <option value="Student">Student</option>
                <option value="Researcher">Researcher</option>
                <option value="Educator">Educator</option>
                <option value="Policymaker">Policymaker</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
          />
        </div>
        {role === 'admin' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Code</label>
            <input
              type="text"
              name="adminCode"
              placeholder="Admin Code"
              value={form.adminCode}
              onChange={handleChange}
              required
              className="w-full p-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition text-lg font-semibold mt-4 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
        {message && (
          <div className={`mt-2 text-center font-medium ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}
      </form>
      <p className="mt-4 text-center text-sm">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 underline hover:text-blue-800">Login here</a>
      </p>
    </div>
  );
};

export default Registration;