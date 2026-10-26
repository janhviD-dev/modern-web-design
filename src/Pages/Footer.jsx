
import { Share2, Globe } from "lucide-react";

function Footer(){
    return (
      <>
        <footer className="w-full bg-mist-800  opacity-80 text-white py-16 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 px-6">
            <h2 className="text-lg font-semibold opacity-90">Check us out:</h2>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-white hover:text-slate-600 transition duration-300 cursor-pointer">
                <Share2 size={22} />
              </div>

              <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-white hover:text-slate-600 transition duration-300 cursor-pointer">
                <Globe size={22} />
              </div>

              <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-white hover:text-slate-600 transition duration-300 cursor-pointer">
                <Share2 size={22} />
              </div>
            </div>

            <p className="text-sm opacity-80">
              A website created in the{" "}
              <span className="text-green-400 font-semibold">WebWave</span>{" "}
              builder.
            </p>
          </div>
        </footer>
      </>
    );
}
export default  Footer;