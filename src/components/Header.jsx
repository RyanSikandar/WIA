import React from 'react';
import { Link } from 'react-router-dom'; // Using react-router for navigation

function Header({ userRole }) {
  return (
    <header className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold tracking-wide">Platform</h1>
        <nav className="flex space-x-6">
          {/* Links for all users */}
          <Link
            to="/profile"
            className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition"
          >
            My Profile
          </Link>

          {/* Conditional Links based on userRole */}
          {userRole === 'job-seeker' && (
            <>
              <Link
                to="/jobs"
                className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition"
              >
                Jobs
              </Link>
              <Link
                to="/mentors"
                className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition"
              >
                Mentors
              </Link>
              <Link
                to="/courses"
                className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition"
              >
                Courses
              </Link>
            </>
          )}

          {userRole === 'organization' && (
            <>
              <Link
                to="/org-jobs"
                className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition"
              >
                Job Posts
              </Link>
              <Link
                to="/add-job"
                className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition"
              >
                Add Job
              </Link>
            </>
          )}

          {userRole === 'mentor' && (
            <>
              <Link
                to="/add-ad"
                className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition"
              >
                Add Advertisement
              </Link>
              <Link
                to="/my-ad"
                className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 transition"
              >
                My Advertisements
              </Link>
            </>
          )}

          {/* Logout Link */}
          <Link
            to="/logout"
            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
