import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { clearUser, setUser } from "../../redux/authSlice";
import auth from "../../firebase/firebase.config";
// import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser(currentUser));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
