import Image from "next/image";
import HeroImage from "../../public/assets/login.jpg";

export default function Home() {
  return (
    <main className="overflow-hidden bg-gray-200 sm:grid sm:grid-cols-2 h-screen items-center">
      <div className="  p-8 md:p-12 lg:px-16 lg:py-2">
        <div className="flex flex-col mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Prescription Precision: Making Healthcare Effortless
          </h2>

          <p className="hidden text-gray-700 md:mt-4 md:block">
            Our system simplifies the process of managing prescriptions and
            doctor's notes, providing a user-friendly platform tailored to the
            needs of healthcare professionals.
          </p>

          <div className="mt-8 md:mt-16">
            <a
              href="#"
              className="inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-[#26302b]"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <Image
        alt="Home page image"
        src={HeroImage}
        className="h-56 w-full object-cover sm:h-full"
      />
    </main>
  );
}
