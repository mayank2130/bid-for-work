import Image from "next/image";
import { Button } from "../shadcn/button";

const ProMembers = () => {
  return (
    <section className="bg-mint-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">
              The premium freelance solution for businesses
            </h2>
            <div className="flex flex-row pr-8 gap-5 mt-10">
              <div className="">
                <div className="mb-6">
                  <h3 className="flex items-center text-lg font-semibold mb-2">
                    <span className="text-emerald-500 mr-2">✓</span>
                    Dedicated hiring experts
                  </h3>
                  <p className="text-gray-600">
                    Count on an account manager to find you the right talent and
                    see to your project's every need.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="flex items-center text-lg font-semibold mb-2">
                    <span className="text-emerald-500 mr-2">✓</span>
                    Advanced management tools
                  </h3>
                  <p className="text-gray-600">
                    Seamlessly integrate freelancers into your team and
                    projects.
                  </p>
                </div>
              </div>

              <div className="">
                <div className="mb-6">
                  <h3 className="flex items-center text-lg font-semibold mb-2">
                    <span className="text-emerald-500 mr-2">✓</span>
                    Satisfaction guarantee
                  </h3>
                  <p className="text-gray-600">
                    Order confidently, with guaranteed refunds for
                    less-than-satisfactory deliveries.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="flex items-center text-lg font-semibold mb-2">
                    <span className="text-emerald-500 mr-2">✓</span>
                    Flexible payment models
                  </h3>
                  <p className="text-gray-600">
                    Pay per project or opt for hourly rates to facilitate
                    longer-term collaboration.
                  </p>
                </div>
              </div>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-semibold">
              Try Now
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/2321104e0c585cceea525419551d3a7c-1721984733481/fiverr-pro.png"
              alt="Project Management"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProMembers;
