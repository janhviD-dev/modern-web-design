import logo2 from "../assets/P1.webp";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import { Link } from "react-router";
import { motion } from "framer-motion";

function OfferItem({ image, title, reverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 md:gap-14 py-16 sm:py-20 border-b border-gray-100 last:border-b-0`}
    >
      <div className="w-full sm:overflow-x-hidden sm:mt-40 md:w-1/2 flex md:pb-50  justify-center">
        <img
          src={image}
          alt={title}
          className="w-full  max-w-sm  sm:max-w-md am md:max-w-lg h-[260px] sm:h-[320px] md:h-[380px] object-cover "
        />
      </div>

      <div className="w-full md:w-1/2 space-y-5 text-center md:text-left px-2 sm:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif md:pt-30 opacity-80">
          {title}
        </h1>

        <p className="text-gray-600 font-serif text-base sm:text-lg leading-relaxed">
          In at faucibus enim, sit amet placerat mauris. Cras orci ipsum,
          vestibulum ac tincidunt ut, eleifend quis dolor. In at faucibus enim,
          sit amet placerat mauris. Cras orci ipsum, vestibulum ac tincidunt ut,
          eleifend quis dolor.
        </p>

        <h2 className="text-xl sm:text-2xl opacity-90 font-serif text-gray-900">
          Duis euismod, velit sit amet ultrices egestas.
        </h2>

        <p className="text-gray-600 font-serif text-base sm:text-lg leading-relaxed">
          Enim eros semper quam, sed volutpat quam libero vitae libero. Enim
          eros semper quam, sed volutpat quam libero vitae libero.
        </p>

        <h3 className="text-emerald-900 font-serif font-bold text-base sm:text-xl opacity-70">
          Ullam tempus est elit, vitae consectetur nulla
        </h3>

        <p className="text-gray-600 text-base sm:text-lg font-serif leading-relaxed">
          Nullam ullamcorper ante sem, nec porttitor ipsum elementum a. Nullam
          nec porttitor ipsum elementum a. Nullam ullamcorper ante sem,
          ullamcorper ante sem, nec porttitor ipsum elementum a.
        </p>

        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-2 bg-emerald-800 opacity-70 hover:opacity-100 text-white px-10 py-3 rounded-full transition duration-300 cursor-pointer"
          >
            SIGN UP
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

function OfferPage() {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
        <OfferItem image={logo2} title="Rock Climbing" reverse={false} />
        <OfferItem image={logo4} title="Canoeing" reverse={true} />
        <OfferItem image={logo5} title="Mountain Hiking" reverse={false} />
      </section>
    </div>
  );
}

export default OfferPage;
