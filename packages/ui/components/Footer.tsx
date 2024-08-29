import Image from "next/image";
import { footerSections } from "@repo/ui/lib/feature";

const Footer = () => {
  return (
    
    <section className="pt-10 pb-5">
    <div className="max-w-7xl mx-auto border-t border-gray-500 pt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-gray-400 mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-400 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/fiverr-logo.svg"
            alt="Fiverr"
            width={80}
            height={24}
          />
          <span className="ml-2 text-gray-500 text-sm">
            © Fiverr International Ltd. 2024
          </span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Image
              src="/tiktok-icon.svg"
              alt="TikTok"
              width={20}
              height={20}
            />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Image
              src="/instagram-icon.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Image
              src="/facebook-icon.svg"
              alt="Facebook"
              width={20}
              height={20}
            />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Image
              src="/pinterest-icon.svg"
              alt="Pinterest"
              width={20}
              height={20}
            />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            <Image
              src="/twitter-icon.svg"
              alt="Twitter"
              width={20}
              height={20}
            />
          </a>
          <select className="ml-4 bg-transparent text-gray-600 text-sm">
            <option value="en">English</option>
            <option value="inr">₹ INR</option>
          </select>
          <button className="ml-4 p-2 rounded-full bg-gray-200">
            <Image
              src="/accessibility-icon.svg"
              alt="Accessibility"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer