import { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import { ImStatsBars } from "react-icons/im";

function Nav() {
  const { user, loading, logout } = useContext(authContext);

  return (
    <header className="container max-w-2xl px-6 py-4 mx-auto">
      <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-3xl p-4 shadow-lg">
        {/* User Information */}
        {user && !loading && (
          <div className="flex items-center gap-3">
            {/* Profile Image */}
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                className="object-cover w-full h-full"
                src={user.photoURL}
                alt={user.displayName}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Greeting */}
            <small className="text-white text-lg font-medium">
              Hi, {user.displayName}!
            </small>
          </div>
        )}

        {/* Navigation Icons */}
        {user && !loading && (
          <nav className="flex items-center gap-4">
            {/* Stats Icon */}
            <a
              href="#stats"
              className="text-white text-2xl hover:scale-110 transition-transform duration-300"
            >
              <ImStatsBars />
            </a>

            {/* Logout Button */}
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-md"
            >
              Sign Out
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Nav;
