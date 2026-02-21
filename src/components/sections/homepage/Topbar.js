import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaRss } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as TiIcons from "react-icons/ti";

const iconLibraries = [FaIcons, TiIcons];

export default function Topbar({ settings }) {
  return (
    <div className="w-full bg-[#f4f4f4] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-20">
        <div className="flex justify-between items-center">
          {/* Left */}
          <div>
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href={settings.siteContactEmail}
                  className="flex items-center gap-2 text-xs hover:underline transition"
                >
                  <FaEnvelope className="text-gray-400" />
                  <span className="text-gray-400 hover:underline">
                    {settings.siteContactEmail}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <ul className="flex items-center">
              {settings.socialLinks.map((link, index) => {
                const Icon = getIconComponent(link.icon); // link.icon = "FaLinkedinIn" or "TiSocialGooglePlus"
                if (!Icon) return null;
                return (
                  <li
                    key={index}
                    className="border-l border-gray-200 first:border-l-0"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-10 h-10  text-[#A2A2A2] hover:bg-gray-700 transition-all duration-300"
                    >
                      <Icon
                        className={`${link.icon.startsWith("Ti") ? "w-6 h-6" : "w-4 h-4"} text-[#A2A2A2] group-hover:text-[#e7512f]`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function getIconComponent(iconName) {
  for (let lib of iconLibraries) {
    if (iconName in lib) {
      return lib[iconName];
    }
  }
  return null; // fallback if icon not found
}
