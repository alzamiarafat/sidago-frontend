import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaRss } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="w-full bg-[#f4f4f4] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-20">
        <div className="flex justify-between items-center">
          {/* Left */}
          <div>
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="mailto:CONTACT@SIDAGO.COM"
                  className="flex items-center gap-2 text-xs hover:underline transition"
                >
                  <FaEnvelope className="text-gray-400" />
                  <span className="text-gray-400 hover:underline">
                    CONTACT@SIDAGO.COM
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <ul className="flex items-center">
              <li>
                <a
                  href="https://www.facebook.com/sidagooutsourcing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 text-[#A2A2A2] hover:bg-gray-700 transition-all duration-300"
                >
                  <FaFacebookF className="w-4 h-4 text-[#A2A2A2] group-hover:text-[#e7512f]" />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/sidagobpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 border-l border-gray-200 text-[#A2A2A2] hover:bg-gray-700 transition-all duration-300"
                >
                  <FaTwitter className="w-4 h-4 text-[#A2A2A2] group-hover:text-[#e7512f]" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/sidago-integrated-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 border-l border-gray-200 text-[#A2A2A2] hover:bg-gray-700 transition-all duration-300"
                >
                  <FaLinkedinIn className="w-4 h-4 text-[#A2A2A2] group-hover:text-[#e7512f]" />
                </a>
              </li>

              <li>
                <a
                  href="https://plus.google.com/u/0/116536599190449967608/"
                  target="_blank"
                  className="group flex items-center justify-center w-10 h-10 border-l border-gray-200 text-[#A2A2A2] hover:bg-gray-700 transition-all duration-300"
                >
                  <TiSocialGooglePlus className="w-6 h-6 text-[#A2A2A2] group-hover:text-[#e7512f]" />
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="group flex items-center justify-center w-10 h-10 border-l border-gray-200 text-[#A2A2A2] hover:bg-gray-700 transition-all duration-300"
                >
                  <FaRss className="w-4 h-4 text-[#A2A2A2] group-hover:text-[#e7512f]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
