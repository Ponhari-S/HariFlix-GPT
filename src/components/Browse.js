import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Browse() {
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          navigate("/");
        }
      });
  
      return () => unsubscribe();
    }, [navigate]);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome to the Browse Page</h1>
        </div>
    );
}

export default Browse;