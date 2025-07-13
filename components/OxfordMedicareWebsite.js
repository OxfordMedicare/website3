
export default function OxfordMedicareWebsite() {
  return (
    <div className="bg-[#0A0F3C] text-white" style={{ fontFamily: 'Palatino Linotype, serif' }}>
      {/* Hero Section */}
      <section className="py-20 px-6 sm:px-8 text-center bg-cover bg-center" style={{ backgroundImage: 'url(/IMG_1410.jpg)' }}>
        <div className="mb-6">
          <img src="/IMG_0997.jpg" alt="Oxford Medicare Logo" className="mx-auto h-20 mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#A5CC50]">Oxford Medicare</h1>
        </div>
        <p className="text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto mb-6 text-white px-4 sm:px-0">
          We bridge global expertise with local commitment to bring equitable healthcare and related services where it’s needed most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center flex-wrap">
          <button className="bg-[#74121D] text-white text-xl px-8 py-4 rounded-2xl shadow font-bold tracking-wide uppercase">
            ECOSYSTEM OF EXPERTS
          </button>
          <button className="bg-[#A5CC50] text-[#0A0F3C] px-6 py-2 rounded-2xl shadow font-semibold">
            Partner with Us
          </button>
        </div>
      </section>

      {/* Market Gap */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-[#A5CC50] mb-4">The Market Gap</h2>
        <p className="text-white mb-4">
          Around the world, underserved communities continue to face systemic barriers to healthcare access — even as global consult-deliver firms offer high-end solutions. But too often, these firms are disconnected from the realities on the ground.
        </p>
        <p className="text-white">
          Oxford Medicare was founded to bridge this divide. We combine global best practices with locally grounded delivery — building trust, reducing cost, and ensuring every project is mission-aligned, community-informed, and scalable.
        </p>
      </section>

      {/* Engagement Model */}
      <section className="bg-[#10194a] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-[#0A0F3C]">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Co-Production Model</h3>
            <p>We don’t just deliver projects — we build them together. Our co-production model ensures every service is co-created with the people it’s meant to serve.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Social License to Operate</h3>
            <p>From the ground up, we earn and maintain a social license to operate by listening, adapting, and staying accountable to community needs.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Global Partnerships</h3>
            <p>We co-deliver with industry leaders—pairing global standards with grassroots trust.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8 text-[#A5CC50]">Our Services</h2>
        <p className="text-white max-w-3xl mx-auto mb-10">
          We design and deliver health solutions that create lasting systems change — combining innovation, equity, and local partnership.
          From telehealth to rural clinics, every service we offer is part of a broader mission: to make quality healthcare universal.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Mobile Diagnostics Labs",
            "Telemedicine & Digital Health Systems",
            "Health Infrastructure (Clinics & Labs)",
            "Health Worker Training & ICT Enablement",
            "Public & Preventive Health Campaigns"
          ].map((service, i) => (
            <div key={i} className="bg-white text-[#0A0F3C] p-6 rounded-2xl shadow text-center">
              <h4 className="font-semibold text-lg">{service}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#A5CC50]">About Us</h2>
        <p className="text-white max-w-3xl mx-auto">
          We offer an integrated portfolio of health-focused services designed to meet critical needs in underserved regions — from diagnostics and infrastructure to digital transformation.
          Our delivery is flexible, scalable, and tuned to the unique realities of each community we serve.
          We apply rapid prototyping to design, test, and refine our interventions quickly — ensuring every solution is effective, efficient, and contextually relevant.
        </p>
      </section>

      {/* Geographic Focus */}
      <section className="bg-[#10194a] py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#A5CC50]">Geographic Focus</h2>
        <p className="text-white max-w-2xl mx-auto mb-4">
          We're growing a global footprint rooted in local trust.
        </p>
        <p className="text-white">
          🌍 <strong>West & East Africa:</strong> Nigeria, Kenya, Ghana, Ethiopia<br />
          🌎 <strong>Latin America:</strong> Colombia, Peru (in planning)<br />
          🌏 <strong>Asia-Pacific:</strong> Philippines, Bangladesh (partnerships underway)
        </p>
      </section>

      {/* Partners & Supporters */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#A5CC50]">Partners & Supporters</h2>
        <p className="text-white max-w-xl sm:max-w-3xl mx-auto mb-4">
          Our partnerships span three tiers:
        </p>
        <ul className="text-white max-w-xl sm:max-w-3xl mx-auto mb-6 list-disc list-inside text-left">
          <li><strong>Strategic Delivery Partners</strong> – Global firms that co-execute projects and share technical infrastructure.</li>
          <li><strong>Local Impact Collaborators</strong> – Community-based organizations and local health leaders.</li>
          <li><strong>Supporters & Funders</strong> – Foundations, public health donors, and philanthropic investors who believe in scalable, ethical delivery.</li>
        </ul>
        <p className="text-white max-w-2xl mx-auto">
          Together, we create smarter, faster pathways to global health equity.
        </p>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#A5CC50]">Impact Metrics</h2>
        <p className="text-white max-w-3xl mx-auto mb-6">
          Our impact is measured not just in numbers — but in lives improved and systems transformed:
        </p>
        <ul className="text-white max-w-xl sm:max-w-3xl mx-auto list-disc list-inside text-left">
          <li>Improved healthcare access for over 100,000 people.</li>
          <li>Strengthened local partnerships in 3 underserved regions.</li>
          <li>Our rapid prototyping cycles have reduced delivery time by over 40%.</li>
          <li>20 health workers trained in digital systems.</li>
          <li>7 pilot programs launched through rapid prototyping.</li>
        </ul>
      </section>

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

      {/* Expert Directory */}
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
