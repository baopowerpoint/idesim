import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Signup from "./pages/Signup";
import LearningArea from "./pages/LearningArea";
import Templates from "./pages/Templates";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCheck from "./pages/AdminCheck";
import PostManaging from "./pages/admin/PostManaging";
import Users from "./pages/admin/Users";
import ProductManaging from "./pages/admin/ProductManaging";
import UserCheck from "./pages/UserCheck";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuthContext } from "./hooks/useAuthContext";

import { useLocation } from "react-router-dom";
import AnimatedPage from "./components/animatePage/AnimatedPage";
import CoursesManaging from "./pages/admin/CoursesManaging";
import CourseInfo from "./pages/CourseInfo";
import Post from "./pages/Post";
import SpinnerPrimary from "./components/spinner/Spinner_primary";
import Profile from "./pages/Profile";
import WatchList from "./pages/WatchList";

function App() {
  const location = useLocation();

  const { authIsReady } = useAuthContext();
  return (
    <div className="text-light bg-dark ">
      {authIsReady && (
        <div className="min-h-screen flex flex-col justify-between">
          <Navbar />{" "}
          <Routes key={location.pathname}>
            {" "}
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />
            <Route
              path="/login"
              element={
                <AnimatedPage>
                  <Login />
                </AnimatedPage>
              }
            />
            <Route
              path="/signup"
              element={
                <AnimatedPage>
                  <Signup />
                </AnimatedPage>
              }
            />
            <Route
              path="/courses"
              element={
                <AnimatedPage>
                  <Courses />
                </AnimatedPage>
              }
            />
            <Route path="/courses/:eTitle" element={<CourseInfo />} />
            <Route
              path="/templates"
              element={
                <AnimatedPage>
                  <Templates />
                </AnimatedPage>
              }
            />
            <Route
              path="/courses/:eTitle/:section/:id"
              element={<LearningArea />}
            />
            <Route
              path="/blogs"
              element={
                <AnimatedPage>
                  <Blog />
                </AnimatedPage>
              }
            />
            <Route
              path="/blogs/:title"
              element={
                <AnimatedPage>
                  <Post />
                </AnimatedPage>
              }
            />
            <Route
              path="/profile"
              element={
                <UserCheck>
                  <Profile />
                </UserCheck>
              }
            />
            <Route
              path="/watch"
              element={
                <UserCheck>
                  <WatchList />
                </UserCheck>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminCheck>
                  <AdminDashboard />
                </AdminCheck>
              }
            />
            <Route
              path="/posts-managing"
              element={
                <AdminCheck>
                  <PostManaging />
                </AdminCheck>
              }
            />
            <Route
              path="/users"
              element={
                <AdminCheck>
                  <Users />
                </AdminCheck>
              }
            />
            <Route
              path="/courses-managing"
              element={
                <AdminCheck>
                  <CoursesManaging />
                </AdminCheck>
              }
            />
            <Route
              path="/products-managing"
              element={
                <AdminCheck>
                  <ProductManaging />
                </AdminCheck>
              }
            />
          </Routes>
          <Footer />
        </div>
      )}
      {!authIsReady && (
        <div className="absolute top-1/2 left-1/2 -m-5 ">
          <SpinnerPrimary />
        </div>
      )}
    </div>
  );
}

export default App;
