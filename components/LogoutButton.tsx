'use client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    toast.success('Logged out successfully');
    router.push('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
    >
      Logout
    </button>
  );
}