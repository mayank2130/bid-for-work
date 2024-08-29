
import Image from "next/image";
import { popularServices } from "../lib/feature";


const PopularServices: React.FC = () => {
  
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-4xl font-bold mb-6">Popular services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 overflow-x-auto">
        {popularServices.map((service) => (
          <div
            key={service.name}
            className={`${service.color} p-4 rounded-lg text-white flex flex-col min-w-[140px]`}
          >
            <h3 className="font-semibold mb-2 text-sm">{service.name}</h3>
            <div className="mt-auto aspect-square bg-white bg-opacity-20 rounded overflow-hidden">
              <Image
                src={service.image}
                width={140}
                height={140}
                alt={service.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
