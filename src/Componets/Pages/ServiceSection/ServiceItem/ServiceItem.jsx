import React, { useEffect } from "react";
import { SiVorondesign, SiGoogleads } from "react-icons/si";
import {
  FaConnectdevelop,
  FaLaravel,
  FaWordpress,
  FaPython,
} from "react-icons/fa";
import { IoCameraReverseOutline } from "react-icons/io5";
import { RiFlutterFill } from "react-icons/ri";
import { MdAnimation } from "react-icons/md";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { TbWriting, TbSeo, TbUxCircle } from "react-icons/tb";
import Hovimg from "./../../../images/projects-2.png";
import Hovimg2 from "./../../../images/projects-3.png";
import Hovimg3 from "./../../../images/projects-4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const servicesData = [
  {
    id: 1,
    icon: <SiVorondesign size={35} />,
    title: "Web Designing",
    description:
      "We deliver modern, responsive web designs tailored to align with your brand identity and business objectives.",
    link: "ecom",
    HovImg: Hovimg,
  },
  {
    id: 2,
    icon: <FaConnectdevelop size={35} />,
    title: "Web Development",
    description:
      "Our development team builds high-performance websites using the latest technologies to ensure scalability and security.",
    link: "webdes",
    HovImg: Hovimg2,
  },
  {
    id: 3,
    icon: <RiFlutterFill size={35} />,
    title: "Mobile App Development",
    description:
      "We develop robust and visually appealing cross-platform mobile applications using Flutter for Android, iOS, and the web.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 4,
    icon: <LiaDigitalTachographSolid size={35} />,
    title: "Digital Marketing",
    description:
      "Our digital marketing strategies are designed to boost online visibility, engage audiences, and drive measurable growth.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 5,
    icon: <TbSeo size={35} />,
    title: "SEO",
    description:
      "We offer professional SEO services aimed at improving search rankings, increasing web traffic, and maximizing ROI.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 6,
    icon: <TbWriting size={35} />,
    title: "Content Writing",
    description:
      "Our content team delivers impactful, SEO-optimized content tailored to your brand’s voice and target audience.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 7,
    icon: <FaConnectdevelop size={35} />,
    title: "Full Stack Development",
    description:
      "We provide comprehensive full stack development services, offering seamless integration between front-end and back-end systems.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 8,
    icon: <FaLaravel size={35} />,
    title: "Laravel Development",
    description:
      "Our Laravel development solutions are secure, scalable, and tailored to support complex business logic and workflows.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 9,
    icon: <FaWordpress size={35} />,
    title: "WordPress Development",
    description:
      "We create custom WordPress websites that are user-friendly, mobile-responsive, and optimized for performance.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 10,
    icon: <IoCameraReverseOutline size={35} />,
    title: "Graphics Designing",
    description:
      "Our design team crafts compelling graphics that enhance brand recognition and effectively communicate your message.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 11,
    icon: <TbUxCircle size={35} />,
    title: "UI/UX Designing",
    description:
      "We specialize in designing intuitive and engaging user experiences that drive user satisfaction and retention.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 12,
    icon: <FaPython size={35} />,
    title: "Python Development",
    description:
      "Our Python development team builds robust, scalable applications tailored to meet diverse business requirements.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 13,
    icon: <MdAnimation size={35} />,
    title: "2D & 3D Animations",
    description:
      "We produce high-quality 2D and 3D animations that enhance storytelling and captivate your audience across platforms.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
  {
    id: 14,
    icon: <SiGoogleads size={35} />,
    title: "Lead Generation",
    description:
      "Our lead generation services are designed to attract and convert high-quality prospects through data-driven strategies.",
    link: "single-services.html",
    HovImg: Hovimg3,
  },
];

const ServicItem = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const displayedServices =
    location.pathname === "/" ? servicesData.slice(0, 6) : servicesData;

  return (
    <div className="h-auto w-full">
      <section className="py-16 lg:px-10 font-ui-sans-serif">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <h6 className="text-lg font-medium">What We Do</h6>
              <h2 className="text-4xl font-bold">Our Services</h2>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {displayedServices.map((service, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0px 10px 20px rgba(0, 139, 208, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative overflow-hidden bg-white border border-[#008bd0] p-6 rounded-lg flex flex-col h-full"
                >
                  {/* Hover Background Image */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 group-hover:opacity-30 opacity-0 z-0"
                    style={{ backgroundImage: `url(${service.HovImg})` }}
                  />

                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-[#008bd0] hover:bg-[#a95670] mx-auto">
                    <p className="text-white">{service.icon}</p>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-2xl font-semibold mb-4 text-center text-[#1e1e2f]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-gray-600 mb-4 text-center">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicItem;
