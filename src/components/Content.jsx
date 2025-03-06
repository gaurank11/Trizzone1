import React, { useState, useCallback, useRef, useMemo } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, Link, Instagram, Facebook, Linkedin, MapPinned } from "lucide-react";

const Content = () => {
  const formRef = useRef(null);

  const initialState = useMemo(() => ({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    service: "",
    message: "",
  }), []);

  const [formData, setFormData] = useState(initialState);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service",
        "template",
        formRef.current,
        "id"
      );
      alert("Message Sent Successfully!");
      setFormData(initialState);
    } catch (error) {
      alert("Error sending message!");
    }
  };

  const countryCodes = useMemo(() => [
    { code: "+91", label: "India" },
    { code: "+1", label: "USA" },
    { code: "+44", label: "UK" }
  ], []);

  const services = useMemo(() => [
    "Residential", "Commercial", "SCO", "Studio Apartments", "Plots", "Fractional Ownership", "FarmHouses"
  ], []);

  return (
    <section className="max-w-7xl mx-auto py-12 px-6 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
       

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-3xl font-bold text-black mb-6">Let's Get in Touch</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            
            {["name", "email"].map((field) => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
                required
              />
            ))}

            {/* Phone Number with Country Code */}
            <div className="flex">
              <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="border p-3 rounded-md" required>
                {countryCodes.map(({ code, label }) => (
                  <option key={code} value={code}>{`${code} (${label})`}</option>
                ))}
              </select>
              <input name="phone" type="text" placeholder="Phone" value={formData.phone} onChange={handleChange} className="ml-2 w-full border p-3 rounded-md" required />
            </div>

            {/* Service Selection */}
            <select name="service" value={formData.service} onChange={handleChange} className="w-full border p-3 rounded-md" required>
              <option value="">Select a Property Type</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>

            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full border p-3 rounded-md" required />

            <button type="submit" className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-900">
              Send Message
            </button>
          </form>
        </div>

         {/* Contact Info Section */}
         <div className="bg-white p-8 rounded-lg shadow-lg text-black transition-transform duration-500 hover:scale-105">
         <div className="md:mt-12 md:pt-12 ">
          <p className="text-lg md:text-xl">
          TRIZZONE, SF 40 , Sushant Vyapar Kendra, Sushant Lok Phase I, Gurugram, Haryana 122002
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-5">
            {[
              { Icon: Mail, label: "Email", value: "", href: "" },
              { Icon: Phone, label: "Phone", value: "", href: "" },
              { Icon: Link, label: "Website", value: "", href: "" }
            ].map(({ Icon, label, value, href }) => (
              <p key={label} className="flex items-center">
                <Icon className="mr-2 text-black h-4 w-4 md:h-7 md:w-7" />
                <span className="font-bold text-base md:text-2xl">{label}:</span>
                <a href={href} className="underline text-red-50 hover:text-red-50 ml-2 text-sm md:text-xl">{value}</a>
              </p>
            ))}
          </div>
      

          {/* Social Links
          <div className="mt-12 flex space-x-4">
            {[
              { Icon: Instagram, href: "", color: "text-pink-500 hover:text-pink-600" },
              { Icon: Facebook, href: "", color: "text-blue-300 hover:text-blue-400" },
              { Icon: Linkedin, href: "https://linkedin.com", color: "text-white hover:text-white" }
            ].map(({ Icon, href, color }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                <Icon className={`${color} md:h-8 md:w-8`} />
              </a>
            ))}
          </div> */}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
