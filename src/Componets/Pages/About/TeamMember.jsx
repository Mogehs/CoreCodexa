import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const team = [
  {
    name: "Usama Joiya (C.E.O)",
    role: "Full Stack WEB & App Developer",
    image: "/images-team/usama.jpg",
  },
  {
    name: "Haseeb Abbasi",
    role: "Business Developer",
    image: "/images-team/haseeb.jpg",
  },
  {
    name: "M. Zeeshan Baqir",
    role: "Python (Django) Developer",
    image: "/images-team/zesshan.jpg",
  },
  {
    name: "Usman Akhtar",
    role: "MERN Stack Developer",
    image: "/images-team/usman.jpg",
  },
  {
    name: "Areeba Asghar",
    role: "Frontend Web Developer",
    image: "/images-team/areeba.jpg",
  },
  {
    name: "Nimra Hannan",
    role: "Machine Learning Developer",
    image: "/images-team/nimra.jpg",
  },
  {
    name: "Mahnoor Mughal",
    role: "WordPress Developer",
    image: "/images-team/mahnoor.jpg",
  },
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ member }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg p-4"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-indigo-400 shadow-md"
          style={{ transform: "translateZ(50px)" }}
        />
        <h3
          className="text-center mt-4 text-xl font-bold text-slate-800"
          style={{ transform: "translateZ(40px)" }}
        >
          {member.name}
        </h3>
        <p
          className="text-center text-gray-600"
          style={{ transform: "translateZ(30px)" }}
        >
          {member.role}
        </p>
      </div>
    </motion.div>
  );
};

const TeamShowcase = () => {
  return (
    <div className="min-h-fit bg-gradient-to-br from-indigo-500 to-violet-500 px-6 py-16 text-slate-900">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-sm">
          Meet Our Creative Team
        </h2>
        <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
          A passionate group of designers and developers driven to build
          beautiful and functional experiences. Get to know the people behind
          our success.
        </p>
        <div className="w-24 h-1 mx-auto mt-4 bg-white rounded-full"></div>
      </div>

      {/* Team Cards */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {team.map((member, index) => (
          <TiltCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamShowcase;
