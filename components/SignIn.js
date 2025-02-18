import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { authContext } from "@/lib/store/auth-context";
import { FcGoogle } from "react-icons/fc";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const MotionImg = dynamic(() => import("framer-motion").then((mod) => mod.motion.img), { ssr: false });
const MotionButton = dynamic(() => import("framer-motion").then((mod) => mod.motion.button), { ssr: false });

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);

  return (
    <MotionDiv 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black"
    >
      <MotionDiv 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl"
      >
        <MotionDiv className="flex justify-center">
          <MotionImg
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-20 h-20 rounded-full border-4 border-white"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User Avatar"
          />
        </MotionDiv>

        <h1 className="mt-4 text-3xl font-bold text-center text-white">Welcome Back 👋</h1>
        <p className="mt-2 text-lg text-center text-gray-300">Sign in to continue</p>

        <MotionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={googleLoginHandler}
          className="flex items-center justify-center w-full gap-3 px-6 py-3 mt-6 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-600 transition-all duration-300"
        >
          <FcGoogle className="text-2xl" /> Sign in with Google
        </MotionButton>
      </MotionDiv>
    </MotionDiv>
  );
}

export default SignIn;
