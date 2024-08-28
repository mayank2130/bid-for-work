import React from "react";
import Image from "next/image";

const FreelancePlatform: React.FC = () => {
  const categories = [
    { name: "Programming & Tech", icon: "💻" },
    { name: "Graphics & Design", icon: "🎨" },
    { name: "Digital Marketing", icon: "📱" },
    { name: "Writing & Translation", icon: "✍️" },
    { name: "Video & Animation", icon: "🎥" },
    { name: "AI Services", icon: "🤖" },
    { name: "Music & Audio", icon: "🎵" },
    { name: "Business", icon: "💼" },
    { name: "Consulting", icon: "🤝" },
  ];

  const popularServices = [
    { name: "Website Development", color: "bg-green-700" },
    { name: "Logo Design", color: "bg-orange-400" },
    { name: "SEO", color: "bg-green-800" },
    { name: "Architecture & Interior Design", color: "bg-pink-700" },
    { name: "Social Media Marketing", color: "bg-yellow-600" },
    { name: "Voice Over", color: "bg-amber-700" },
    { name: "Software Development", color: "bg-green-900" },
  ];

  const features = [
    { icon: "👥", text: "Access a pool of top talent across 700 categories" },
    { icon: "🔄", text: "Enjoy a simple, easy-to-use matching experience" },
    { icon: "⚡", text: "Get quality work done quickly and within budget" },
    { icon: "💰", text: "Only pay when you're happy" },
  ];

  return (
    <div className=" text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Scale your professional workforce with <i>freelancers</i>
        </h1>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for any service..."
            className="w-full py-3 px-4 pr-12 rounded-full text-black"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-900 p-2 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {["Jenny", "Veronika", "Jordan", "Collin"].map((name, index) => (
            <div
              key={name}
              className="relative w-24 h-24 rounded-lg overflow-hidden"
            >
              <Image
                src={`/placeholder-${index + 1}.jpg`}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-1">
                <p className="text-sm text-center">{name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <p className="text-sm mb-2">Trusted by:</p>
          <div className="flex gap-4">
            {["Meta", "Google", "Netflix", "P&G", "PayPal", "Payoneer"].map(
              (company) => (
                <div key={company} className="text-gray-300 text-sm">
                  {company}
                </div>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4">
          {categories.map(({ name, icon }) => (
            <div key={name} className="bg-green-700 p-4 rounded-lg text-center">
              <span className="text-2xl mb-2">{icon}</span>
              <p className="text-sm">{name}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Popular services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularServices.map((service) => (
            <div
              key={service.name}
              className={`${service.color} p-4 rounded-lg text-white`}
            >
              <h3 className="font-semibold mb-2">{service.name}</h3>
              <div className="h-32 bg-white bg-opacity-20 rounded"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Fiverr Pro section */}
      <section className="bg-mint-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">
                The premium freelance solution for businesses
              </h2>
              <ul className="space-y-2">
                <li>✓ Dedicated hiring experts</li>
                <li>✓ Satisfaction guarantee</li>
                <li>✓ Advanced management tools</li>
                <li>✓ Flexible payment models</li>
              </ul>
              <button className="mt-6 bg-black text-white px-6 py-2 rounded">
                Try Now
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/project-management.jpg"
                alt="Project Management"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Make it all happen section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Make it all happen with freelancers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.text} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-green-500 text-white px-6 py-2 rounded mr-4">
            Join now
          </button>
        </div>
      </section>

      {/* Logo Maker section */}
      <section className="bg-gradient-to-r from-pink-100 to-orange-100 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">fiverr logo maker</h3>
            <h2 className="text-3xl font-bold mb-4">
              Make an incredible logo{" "}
              <span className="text-orange-500">in seconds</span>
            </h2>
            <p className="mb-6">
              Pre-designed by top talent. Just add your touch.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded">
              Try Fiverr Logo Maker
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/logo-maker.jpg"
              alt="Logo Maker"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreelancePlatform;
