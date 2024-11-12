// import { Link } from "react-router-dom";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {
  const user = false;
  return (
    // <div className="hero-bg h-screen">
    //   <div className="h-screen w-full hero-bg">
    //     <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
    //       <Link to={"/"}></Link>
    //     </header>
    //   </div>
    // </div>
    <div>{user ? <HomeScreen /> : <AuthScreen />}</div>
  );
};

export default HomePage;
