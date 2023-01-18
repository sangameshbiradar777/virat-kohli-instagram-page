import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { userInfoEndpoint } from "./config";

function App() {
  const [user, setUser] = useState({});
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setIsLoadingUser(true);
        const userResponse = await axios.get(userInfoEndpoint);
        const user = userResponse.data;
        setUser(user);
      } catch (error) {
        console.error(error.message);
        setError(error);
      } finally {
        setIsLoadingUser(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header user={user} />
      <Main user={user} />
      <Footer />
    </div>
  );
}

export default App;
