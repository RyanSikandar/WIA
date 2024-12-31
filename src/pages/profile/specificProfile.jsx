import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { useRedirect } from '../../customHook/useRedirect';

function SpecificProfile() {
  useRedirect();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState(null); // To hold user data
  const [predefinedRole, setPredefinedRole] = useState('');

  // Fetch user profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/auth/user/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
          },
        });
        const user = response.data.user;
        setUserProfile(user);
        setPredefinedRole(user.role); // Set role dynamically
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (!userProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Header userRole={predefinedRole} />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md space-y-6">
          <h1 className="text-2xl font-bold text-center text-gray-900">Profile</h1>

          <div className="space-y-4">
            <div className="text-center">
              <img
                src={userProfile.image}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{userProfile.name}</h2>
              <p className="text-gray-600">Email: {userProfile.email}</p>
              <p className="text-gray-600">
                Role: <span className="font-medium">{userProfile.role}</span>
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecificProfile;
