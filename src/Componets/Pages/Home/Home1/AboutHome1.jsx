import React, { useEffect } from "react";
import aboutImage from "../../../images/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutHome1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className=" py-16 lg:px-10 font-ui-sans-serif">
      <div className="container mx-auto px-4 " data-aos="fade-right">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-8 lg:mb-0">
              <h6 className="text-lg text-[#008bd0]">Core Codexa</h6>
              <h2 className="text-4xl font-bold mt-4 ">
                We design, develop, implement and support IT Systems{" "}
              </h2>
              <p className=" mt-6">
                Core Codexa is a forward-thinking technology company dedicated
                to providing cutting-edge software development solutions. We
                specialize in crafting innovative digital experiences through a
                blend of creativity, technical expertise, and a customer-first
                approach. Core Codexa, we offer a wide range of services,
                including custom web and mobile application development,
                full-stack development, and UI/UX design products.
              </p>
              <div className="mt-8 p-6 bg-[#0f0f1d] border  rounded-lg">
                <h3 className="text-xl font-semibold text-gray-300">
                  We are a highly trained and qualified team ready to provide
                  viable Core Codexa solutions together with full-time support
                  and expert advice to fulfill your business needs.
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={aboutImage} alt="About us" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome1;
