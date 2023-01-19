import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Loader from "./components/Loader";
import axios from "axios";
import { useState, useEffect } from "react";
import { userInfoEndpoint } from "./config";
import "./mediaQueries/media.css";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const userResponse = await axios.get(userInfoEndpoint);
        const user = userResponse.data;
        setUser(user);
      } catch (error) {
        console.error(error.message);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {isLoading ? (
        <Loader isUserLoader />
      ) : error.message ? (
        <Error />
      ) : (
        <>
          <Header user={user} error={error} />
          <Main user={user} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
