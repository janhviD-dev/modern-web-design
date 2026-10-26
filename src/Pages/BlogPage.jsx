import { Link } from "react-router";
import img from "../assets/blog_main.webp";
import img1 from "../assets/Blog_1.webp";
import img2 from "../assets/Blog_2.webp";
import img3 from "../assets/Blog_3.webp";

function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[80vh]">
        <img
          src={img}
          alt="Blog"
          className="absolute inset-0 w-full h-full "
        />

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center space-y-6">
          <h1 className="text-white text-2xl italic font-serif font-light">Travel with us</h1>
          <h2 className="text-white text-5xl  font-bold">BLOG</h2>

          <Link to="/contact">
            <button className="bg-white font-semibold border-2 border-white rounded-full py-2 px-15 hover:bg-black `hover:text-black` hover:border-black hover:text-white transition">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img src={img1} alt="" className="w-full md:w-80 -lg" />

          <div>
            <h2 className="text-2xl font-semibold">
              Ideas for active vacations
            </h2>

            <p className="text-sm text-gray-400 mt-1">19 August 2022</p>

            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
              ligula condimentum est sagittis tempor. Morbi ac purus
              pellentesque, dignissim magna ut, ultricies leo. Donec malesuada
              augue eget lectus tincidunt
            </p>

            <p className="text-emerald-700 mt-3 hover:underline cursor-pointer">
              Czytaj wiecej
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img src={img2} alt="" className="w-full md:w-80 rounded-lg" />

          <div>
            <h2 className="text-2xl font-semibold">
              Ideas for active vacations
            </h2>

            <p className="text-sm text-gray-400 mt-1">19 August 2022</p>

            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
              ligula condimentum est sagittis tempor. Morbi ac purus
              pellentesque, dignissim magna ut, ultricies leo. Donec malesuada
              augue eget lectus tincidunt
            </p>

            <p className="text-emerald-700 mt-3 hover:underline cursor-pointer">
              Czytaj wiecej
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img src={img3} alt="" className="w-full md:w-80 rounded-lg" />

          <div>
            <h2 className="text-2xl font-semibold">
              Ideas for active vacations
            </h2>

            <p className="text-sm text-gray-400 mt-1">19 August 2022</p>

            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
              ligula condimentum est sagittis tempor. Morbi ac purus
              pellentesque, dignissim magna ut, ultricies leo. Donec malesuada
              augue eget lectus tincidunt
            </p>

            <p className="text-emerald-700 mt-3 hover:underline cursor-pointer">
              Czytaj wiecej
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
