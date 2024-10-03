import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="log" />
        </Link>
      </header>
    </div>
  );
};

export default SignUp;
