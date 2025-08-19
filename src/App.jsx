import "./App.css";
import { Route, Routes, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/AuthProvider";
import { TweetsProvider } from "./components/TweetsProvider";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import { useState } from "react";

function App() {
  const [isAuthReady, setAuthReady] = useState(false);
  return (
    <>
      <AuthProvider onAuthReady={() => setAuthReady(true)}>
        {isAuthReady && (
          <Layout>
            <TweetsProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </TweetsProvider>
          </Layout>
        )}
      </AuthProvider>
    </>
  );
}

export default App;
