import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-transparent mb-10 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <div className="font-bold text-white text-5xl">PG</div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/peyush-gedela-30715b26a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/peyushgedela"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/thegedela"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/thegedela"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
