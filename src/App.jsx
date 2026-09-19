import axios from "axios";
import { useState } from "react";

import Navbar from "./Components/Navbar";
import User from "./Components/User";

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchUser = async (username) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log("Response:", response.data);
      setUser(response.data);
      setError(null);
      searchRepos(username);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false)
    }
  };

  const searchRepos = async (username) => {
    try {
      setError(null);
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=updated`
      );
      setRepos(response.data);
      console.log("Repos:", response.data);
    } catch (error) {
      setRepos([]);
      setError(error.message);
    }
  };
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] text-center px-4">
        <h1 className="text-[#888882] text-md mb-2"> Couldn't Find the User </h1>
      </div>
    );
  }
  return (
    <div className="bg-[#F7F7F5] min-h-screen geist-pixel">
      <Navbar searchUser={searchUser} loading={loading} />
      <User
        user={user}
        repos={repos}
      />
    </div>
  );
};

export default App;