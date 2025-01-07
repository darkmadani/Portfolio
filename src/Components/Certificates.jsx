import React, { useState } from "react";
import { certificatesContributions } from "../data/title";
import { certificates, categories } from "../data/certificate"; // Tambahkan kategori di file data
import Card from "./Custom/CertifCard";

function Certificates() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter certificates berdasarkan kategori yang aktif
  const filteredCertificates = activeCategory === "all"
    ? certificates
    : certificates.filter(certificate => certificate.category === activeCategory);

  return (
    <div className="md:w-10/12 w-11/12 mx-auto text-white py-10" id="certificates">
      <div className="font-bold text-xl text-[#37BCF8] pb-6">
        {certificatesContributions}
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-[#37BCF8] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Certificates Grid */}
      <div className="lg:w-11/12 w-full mx-auto flex flex-wrap items-center justify-center gap-8 py-6">
        {filteredCertificates.map((element) => (
          <div
            key={element.name}
            className="w-11/12 lg:w-5/12 md:w-2/3 sm:w-3/4 flex flex-wrap items-center"
          >
            <Card
              name={element.name}
              img={element.img}
              description={element.description}
              link={element.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
