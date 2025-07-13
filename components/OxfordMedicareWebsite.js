export default function OxfordMedicareWebsite() {
  return (
    <div className="bg-[#0A0F3C] text-white" style={{ fontFamily: 'Palatino Linotype, serif' }}>
      {/* ...previous sections inserted here (already provided) */}

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#A5CC50]">Contact</h2>
        <p className="text-white max-w-3xl mx-auto mb-6">
          Interested in partnering, funding, or learning more? We’d love to hear from you.
        </p>
        <div className="bg-white text-[#0A0F3C] rounded-2xl p-8 max-w-xl mx-auto shadow">
          <form className="grid grid-cols-1 gap-4">
            <input className="p-3 rounded-md border border-gray-300" type="text" placeholder="Full Name" required />
            <input className="p-3 rounded-md border border-gray-300" type="email" placeholder="Email Address" required />
            <textarea className="p-3 rounded-md border border-gray-300" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="bg-[#A5CC50] text-[#0A0F3C] py-2 px-4 rounded-md font-semibold shadow">Send Message</button>
          </form>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#A5CC50]">Careers</h2>
        <p className="text-white max-w-3xl mx-auto mb-6">
          Join a mission-driven team working at the intersection of healthcare, technology, and equity. We’re always looking for bold thinkers, builders, and doers who want to co-create the future of global health.
        </p>
        <ul className="text-white max-w-xl sm:max-w-3xl mx-auto list-disc list-inside text-left mb-6">
          <li>Field Coordinators – Local Operations</li>
          <li>Digital Health & IT Specialists</li>
          <li>Health Systems Researchers</li>
          <li>Design & Rapid Prototyping Leads</li>
          <li>Partnership Development Managers</li>
        </ul>
        <div className="text-center">
          <button className="bg-[#A5CC50] text-[#0A0F3C] font-semibold px-6 py-2 rounded-2xl shadow">Explore Opportunities</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#A5CC50]">FAQ</h2>
        <ul className="text-white max-w-xl sm:max-w-3xl mx-auto list-disc list-inside text-left">
          <li><strong>Who can partner with Oxford Medicare?</strong><br /> We collaborate with NGOs, ministries of health, EPC firms, and funders focused on healthcare innovation and access.</li>
          <li><strong>Where do you operate?</strong><br /> We currently serve regions in Africa, Asia-Pacific, and Latin America. Our work expands based on local partnerships and need.</li>
          <li><strong>How do you fund your work?</strong><br /> Through a mix of grants, service contracts, philanthropic capital, and co-funding partnerships.</li>
          <li><strong>Do you hire internationally?</strong><br /> Yes. We welcome global talent and prioritize local hiring in delivery countries.</li>
        </ul>
      </section>

      {/* Expert Directory Placeholder */}
      <section className="bg-[#10194a] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#A5CC50] mb-4">Ecosystem of Experts</h2>
        <p className="text-white max-w-2xl mx-auto mb-6">
          We are building a searchable directory of health and technology experts committed to equitable care delivery. Launching soon.
        </p>
        <button className="bg-[#74121D] text-white text-lg px-8 py-3 rounded-2xl font-bold shadow uppercase">
          Join the Network
        </button>
      </section>
    </div>
  );
}
