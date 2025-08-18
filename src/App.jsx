import "./App.css";
import { Route, Routes, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/AuthProvider";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import { getTweets, postTweet } from "./data/serverAPI";

function App() {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await getTweets();
      setTweets(data);
    }
    getData();
  }, []);

  async function handlePost(tweet) {
    console.log(tweet);
    const post = await postTweet(tweet);
    const data = await getTweets();
    setTweets(data);
  }

  return (
    <>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage tweets={tweets} handlePost={handlePost} />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage tweets={tweets} />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </>
  );
}

export default App;
