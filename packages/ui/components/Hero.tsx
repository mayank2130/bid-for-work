import { categories } from "@repo/ui/lib/feature";
import { Input } from "@repo/ui/shadcn/input";
import { Button } from "@repo/ui/shadcn/button";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto p-3 rounded-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-left flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 mt-16 max-w-2xl">
              Find best people through a{" "}
              <span className="text-blue-600">
                bidding process for your projects.
              </span>
            </h1>
            <h2 className="text-2xl font-medium mt-3">
              Find people with lowest{" "}
              <span className="text-green-500 ">bids</span> and highest
              <span className="text-blue-600"> quality</span>.
            </h2>
          </div>
        </div>

        {/* Landing Search Bar */}
        <div className="flex mx-auto justify-center max-w-2xl">
          <div className="relative mt-20 border rounded-full w-full">
            <Input
              type="text"
              placeholder="Search for any service..."
              className="w-full p-4 pr-12 rounded-full"
            />
            <Button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-500 p-2 rounded-full">
              <svg
                className="w-5 h-5"
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
            </Button>
          </div>
        </div>

        {/* <div className="flex flex-wrap gap-4 mb-8">
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
        </div> */}

        {/* <div className="mb-8">
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
        </div> */}

        <div className="mt-20">
          <h3 className="text-xl font-normal mb-2">Choose by Category</h3>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4 mt-3">
          {categories.map(({ name, icon }) => (
            <div
              key={name}
              className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-700 to-gray-400 p-4 rounded-lg text-center"
            >
              <span className="text-2xl mb-2">{icon}</span>
              <p className="text-sm">{name}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Hero