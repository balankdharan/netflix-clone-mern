import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="hero-bg h-screen">
      <div className="h-screen w-full hero-bg">
        <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link to={"/"}></Link>
        </header>
      </div>
    </div>
  );
};

export default HomePage;
