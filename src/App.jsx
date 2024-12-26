import { FaInstagram, FaFacebook, FaDribbble, FaBehance } from "react-icons/fa";
function App() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-gray-950">
      <div className="bg-blue-950 lg:w-[20%] lg:h-[25%] p-4 text-white flex justify-start flex-col  gap-4 rounded-md">
        <p>Follow us!</p>
        <div className="flex gap-4 text-2xl justify-start items-center mb-5 ">
          <div className="w-10 h-10 bg-blue-800 flex justify-center items-center rounded-md">
            <FaInstagram />
          </div>
          <div className="w-10 h-10 bg-blue-800 flex justify-center items-center rounded-md">
            <FaFacebook />
          </div>
          <div className="w-10 h-10 bg-pink-600 flex justify-center items-center rounded-md">
            <FaDribbble className="text-white" />
          </div>
          <div className="w-10 h-10 bg-blue-800 flex justify-center items-center rounded-md">
            <FaBehance className="text-blue-500" />
          </div>
        </div>
        <p>Or share the page</p>
        <div className="bg-gray-900 w-full h-10 flex justify-between items-center p-4 text-xs gap-4">
          <p className="text-white">https://vantalink.com</p>
          <a href="#" className="text-blue-800">
            Copy to clipboard
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
