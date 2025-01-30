"use client";

import firebaseApp from "@/firebase/firebase";
import api from "@/services/api";
import { useFcmToken } from "@/utils/hooks";
import { getMessaging, onMessage } from "firebase/messaging";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";
import Script from "next/script";
import axios from "axios";

const RootLayer = ({ children }) => {
  const { fcmToken } = useFcmToken();

  const [userData, setUserData] = useState(null);
  const pathname = usePathname();
  const [toogleMenu, setToogleMenu] = useState(false);

  const getUserData = async () => {

    let user = JSON.parse(localStorage.getItem('@user'));

    if (user) {
      setUserData(user);
    }
  }

  useEffect(() => {
    let token = localStorage.getItem('@token');
    if (token) {
      getUserData();
    }
  }, [])

  const handleToogleMenu = () => {
    setToogleMenu(!toogleMenu);
  }

  useEffect(() => {
    if (fcmToken) {
      localStorage.setItem("@fcm_token", fcmToken);
    }
  }, [fcmToken]);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
      });
      return () => {
        unsubscribe();
      };
    }
  }, []);

  useEffect(() => {
    let getUserData = JSON.parse(localStorage.getItem("@user"));
    if (getUserData) {
      setUserData(getUserData);
    }
  }, []);

  let dashboardRoutes = [
    "/my-devices",
    "/how-it-works",
    "/my-progress",
    "/manage-account",
    "/wishlist",
    "/profile-setting",
    "/winning-participation",
    "/post-ad",
    "/edit-ad",
    "/statement",
    "/referral-earning"
  ]

  useEffect(() => {
    const fetchUserIpAndTrackUtm = async () => {
      try {
        // Get the user's IP location data
        const res = await fetch('https://ipinfo.io/json');
        const locationData = await res.json();
        console.log("(window.location=> ", window.location?.search);

        // Manually parse query parameters from window.location.search
        const query = window.location.search.substring(1); // Remove "?" from the beginning
        const params = {};
        query.split("&").forEach((param) => {
          const [key, value] = param.split("=");
          params[key] = decodeURIComponent(value || "");
        });

        // Extracting UTM parameters and other details
        const queryParams = {
          utm_source: params["utm_source"] || "",
          utm_medium: params["utm_medium"] || "",
          utm_campaign: params["utm_campaign"] || "",
          utm_content: params["utm_content"] || "",
          utm_term: params["utm_term"] || "",
          page_url: `${window.location.origin}${window.location.pathname}` || "",
          ip: locationData.ip || "",
          location: `${locationData?.city}, ${locationData.region}, ${locationData.country}` || ""
        };

        try {
          const response = await api.post('https://api.mobilezmarket.com/api/capture-utm', queryParams, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log("response=> ", response);
          return response.data;
        } catch (error) {
          console.error("Failed to post UTM data:", error.response?.data || error.message);
          throw error;
        }
      } catch (error) {
        console.error("Failed to fetch user IP:", error.message);
      }
    };

    fetchUserIpAndTrackUtm();
  }, []); // Empty dependency array ensures this runs once on mount.


  return (
    <div className={`${dashboardRoutes.includes(pathname) ? '_dashboard' : '_web'}`}>
      {dashboardRoutes.includes(pathname) ? (
        <Menu
          handleToogleMenu={handleToogleMenu}
          toogleMenu={toogleMenu}
        />
      ) : (
        <Navbar userData={userData} />
      )}

      {dashboardRoutes.includes(pathname) ? (
        <div>
          <DashboardHeader
            handleToogleMenu={handleToogleMenu} userData={userData} />
          {children}
        </div>
      ) : (
        children
      )}
      {dashboardRoutes.includes(pathname) !== true && <Footer />}
      <Script>
        {`
          function myCallbackFunc(){
            console.log('google maps loaded');
          }
        `}
      </Script>
      <Script async defer
        type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhs33Zqv1-a7XcZkEWKvJNh10oWlVYyO8&libraries=places&callback=myCallbackFunc"
      />
    </div>
  );
};

export default RootLayer;
