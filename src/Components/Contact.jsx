import React from "react";
import { contact } from "../data/title";
import { contacts } from "../data/contact";
import IconWithText from "./Custom/IconWithText";

function Contact() {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto text-white py-14 pb-24" id="contact">
      {/* Location Section */}
      <div id="location" className="sm:w-3/4 w-10/12 mx-auto">
        <h2 className="font-bold text-xl text-[#37bbf8] pb-6">Lokasi</h2>
        <p className="text-lg mb-6">
          Saya Tinggal Di Tangerang Selatan. Berikut adalah lokasi Kantor saya:
        </p>
        <div className="w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3686724091776!2d106.68895767409822!3d-6.346282562087832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5a6e26dc3cd%3A0xccd6344b8021119d!2sUniversitas%20Pamulang%20Kampus%202%20(UNPAM%20Viktor)!5e0!3m2!1sid!2sid!4v1736230515996!5m2!1sid!2sid"
            className="w-full h-[450px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Contact Section */}
      <div className="font-bold text-xl text-[#37bbf8] pb-6">{contact}</div>
      <div className="sm:w-3/4 w-10/12 mx-auto shadow-lg rounded-lg mb-12">
        <div className="bg-[#1f2945] rounded-lg py-6 px-4 flex flex-wrap items-center sm:justify-center gap-6">
          {contacts.map((element) => {
            return (
              <IconWithText
                key={element.label}
                icon={element.icon}
                label={element.label}
                link={element.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
