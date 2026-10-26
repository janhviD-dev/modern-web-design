import logo from "../assets/pLogo.webp";
import logo1 from "../assets/pLogo1.webp";
import G1 from "../assets/Gallery_1.webp";
import G2 from "../assets/Gallery_2.webp";
import G3 from "../assets/Gallery_3.webp";
import G4 from "../assets/Gallery_4.webp";
import { Link } from "react-router";
import { motion } from "framer-motion";
import mainL from "../assets/TempL1.webp";
import Footer from "./Footer";

function Section1() {
   

  return (
    <div className="bg-white w-full overflow-x-hidden">
      <div className="relative w-full h-screen min-h-[500px]">
        <img
          src={mainL}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />

        <motion.div
          whileHover={{
            scale: 1.05,
           backgroundColor: "rgba(255,255,255,0.08)",

            boxShadow: "0px 0px 60px rgba(255,255,255,0.35)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 rounded-xl"
        >
          <p className="italic text-base sm:text-xl md:text-2xl text-white tracking-wide">
            Adventurers
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-2 font-bold text-white leading-tight max-w-4xl">
            Let yourself be impressed
          </h1>
          <Link to="/contact">
            <button className="bg-white mt-8 sm:mt-12 cursor-pointer font-semibold text-black px-10 sm:px-14 py-3 rounded-full hover:bg-black hover:text-white transition">
              SIGN UP
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pt-16 sm:pt-24 md:pt-28"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-700 tracking-widest">
            POWER OF IMPRESSIONS GUARANTEED
          </h1>
          <h2 className="pt-3 text-lg sm:text-xl md:text-2xl font-serif text-gray-700">
            FEEL EXTREMELY
          </h2>
          <p className="pt-5 text-gray-500 font-serif max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Curabitur sit amet purus semper tortor tempor lacinia eu in tortor.
            Curabitur sit amet purus semper tortor tempor lacinia eu in tortor.
            Curabitur sit amet purus semper tortor tempor lacinia eu in tortor.
          </p>
          <div className="italic pt-8 text-gray-500 flex justify-center">
            <p className="text-sm sm:text-base">
              Curabitur sit amet purus semper{" "}
              <span className="block sm:inline text-green-800 opacity-80 hover:underline cursor-pointer">
                Tortor Tempor
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-16 sm:py-20"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              src={logo}
              alt="rock climbing"
              className="w-64 sm:w-80 md:w-full max-w-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-emerald-800 opacity-60 text-sm sm:text-base font-bold tracking-widest uppercase">
              Rock Climbing
            </h2>
            <p className="mt-4 text-gray-700 text-lg sm:text-xl md:text-2xl font-serif leading-relaxed space-y-1">
              <span className="block">
                Curabitur sit amet purus semper tortor tortor.
              </span>
              <span className="block">Curabitur sit amet purus semper.</span>
              <span className="block">Curabitur sit amet</span>
              <span className="block">Curabitur sit</span>
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 bg-emerald-800 cursor-pointer opacity-70 hover:opacity-100 text-white px-10 py-3 rounded-full transition"
              >
                SIGN UP
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 py-16 sm:py-20 border-t border-gray-100"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              src={logo1}
              alt="activity"
              className="w-64 sm:w-80 md:w-full max-w-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-emerald-800 opacity-60 text-sm sm:text-base font-bold tracking-widest uppercase">
              Rock Climbing
            </h2>
            <p className="mt-4 text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif leading-relaxed space-y-1">
              <span className="block">
                Curabitur sit amet purus semper tortor tortor.
              </span>
              <span className="block">Curabitur sit amet purus semper.</span>
              <span className="block">Curabitur sit amet</span>
              <span className="block">Curabitur sit</span>
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 bg-emerald-800 cursor-pointer opacity-70 hover:opacity-100 text-white px-10 py-3 rounded-full transition"
              >
                SIGN UP
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <div className="py-16 sm:py-20 border-t border-gray-100">
          <h2 className="text-center text-3xl sm:text-4xl font-serif opacity-80 mb-10 sm:mb-14 tracking-widest">
            GALLERY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* tall left image */}
            <div className="h-[260px] sm:h-[360px] md:h-[620px] overflow-hidden rounded-lg">
              <img
                src={G1}
                alt="Gallery 1"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="grid grid-rows-2 gap-4 sm:gap-6">
              <div className="h-[160px] sm:h-[220px] md:h-[300px] overflow-hidden rounded-lg">
                <img
                  src={G2}
                  alt="Gallery 2"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="h-[140px] sm:h-[200px] md:h-[300px] overflow-hidden rounded-lg">
                  <img
                    src={G3}
                    alt="Gallery 3"
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="h-[140px] sm:h-[200px] md:h-[300px] overflow-hidden rounded-lg">
                  <img
                    src={G4}
                    alt="Gallery 4"
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-12 sm:py-16 border-t border-gray-100 mb-4">
          <p className="text-lg sm:text-xl md:text-2xl font-serif font-bold opacity-70 text-center sm:text-left max-w-xl">
            Do you have questions? Suggestions? Write to us.
          </p>
          <Link to="/contact">
            <button className="bg-emerald-800 text-white px-10 py-4 rounded-full hover:bg-black transition whitespace-nowrap">
              Connect
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section1;
