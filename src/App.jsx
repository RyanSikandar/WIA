
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import CreateProfile from "./pages/create-profile";
import Profile from "./pages/profile";
import AddJob from "./pages/add-job";
import OrgJobs from "./pages/organization-jobs";
import Jobs from "./pages/jobs";
import AddAdvertisement from "./pages/add-ad";
import MyAd from "./pages/my-ad";
import Mentors from "./pages/mentor";
import Courses from "./pages/courses";
import SpecificProfile from "./pages/profile/specificProfile";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<SpecificProfile />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/org-jobs" element={<OrgJobs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-ad" element={<AddAdvertisement />} />
        <Route path="/my-ad" element={<MyAd />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>    
  )
}

export default App
