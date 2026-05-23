import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Home,
  CheckCircle,
  MapPin,
  Phone,
  CalendarDays,
  ShieldCheck,
  Droplets,
  Star,
  Mail,
} from "lucide-react";

function Button({ children, variant = "solid", className = "", ...props }) {
  return (
    <button {...props} className={`button ${variant === "outline" ? "buttonOutline" : ""} ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Standard Home Cleaning Estimate",
    details: "",
  });

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const estimateMessage = `Hi White River Cleaning, my name is ${form.name || "___"}. I'm interested in ${form.service}. My phone number is ${form.phone || "___"}. Details: ${form.details || "___"}`;

  const smsText = encodeURIComponent(estimateMessage);
  const emailSubject = encodeURIComponent("Free Cleaning Estimate Request");
  const emailBody = encodeURIComponent(estimateMessage);

  const copyEstimate = async () => {
    try {
      await navigator.clipboard.writeText(estimateMessage);
      alert("Estimate request copied. You can paste it into a text, email, or Facebook message.");
    } catch {
      alert("Copy did not work automatically. You can highlight and copy the request summary below.");
    }
  };

  const services = [
    {
      icon: Home,
      title: "Standard Home Cleaning",
      text: "Great for regular upkeep: kitchens, bathrooms, floors, dusting, surfaces, and general tidying. Most standard cleanings are quoted based on home size and condition.",
    },
    {
      icon: Droplets,
      title: "Deep Cleaning",
      text: "For homes that need extra attention: built-up grime, baseboards, cabinets, appliances, and heavier detail work. Deep cleans are customized after a free estimate.",
    },
    {
      icon: CalendarDays,
      title: "Move-In / Move-Out",
      text: "A reset clean for renters, landlords, families moving, or anyone preparing a space for the next chapter. Move-in and move-out cleanings are quoted individually.",
    },
  ];

  const included = [
    "Kitchen surface wipe-downs",
    "Bathroom cleaning and sanitizing",
    "Vacuuming and sweeping",
    "Mopping floors",
    "Dusting surfaces and furniture",
    "Trash removal",
    "Bedroom and living area tidying",
    "Appliance exterior wipe-downs",
    "Baseboards and deeper detail work during deep cleans",
  ];

  return (
    <main>
      <section className="hero">
        <div className="orb orbRight" />
        <div className="orb orbLeft" />

        <div className="heroGrid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="badge"><MapPin size={16} /> Serving Batesville and nearby Arkansas areas</div>
            <h1>White River Cleaning</h1>
            <p className="heroText">Reliable, friendly home cleaning for busy families, seniors, renters, and anyone who needs their space to feel fresh again.</p>
            <div className="heroButtons">
              <a href="#booking"><Button>Request a Free Estimate</Button></a>
              <a href="#services"><Button variant="outline">View Services</Button></a>
            </div>
            <div className="miniGrid">
              <span><CheckCircle size={16} /> Flexible booking</span>
              <span><CheckCircle size={16} /> Local cleaners</span>
              <span><CheckCircle size={16} /> Free estimates available</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card className="featureCard">
              <div className="iconBox"><Sparkles size={30} /></div>
              <p className="quote">“A cleaner home without the stress.”</p>
              <p className="bodyText">Whether you need a regular reset, a deeper clean, or help before moving, White River Cleaning makes it simple to request a free estimate and get matched with dependable local help.</p>
              <div className="notice">
                <p className="noticeTitle">Current service area</p>
                <p>Batesville, Southside, Cushman, Newark, Oil Trough, Pleasant Plains, and nearby areas by request.</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionIntro">
          <p className="eyebrow">Services</p>
          <h2>Simple cleaning options for real homes.</h2>
          <p>Start with a free estimate. We’ll ask a few questions about your home, the condition, and what you need cleaned so we can give you a fair quote before the job begins.</p>
        </div>
        <div className="serviceGrid">
          {services.map((item) => (
            <Card key={item.title} className="serviceCard">
              <div className="iconBox small"><item.icon size={24} /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="whiteSection">
        <div className="twoCol">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2>Local, flexible, and easy to work with.</h2>
            <p>We’re starting small so we can focus on doing the basics right: clear communication, dependable scheduling, free estimates, and honest cleaning help for local homes.</p>
          </div>
          <div className="stack">
            <Reason icon={ShieldCheck} title="Respectful screening" text="Cleaners are interviewed before being matched with local jobs." />
            <Reason icon={Phone} title="Easy communication" text="Request a free estimate online, then confirm details by text or phone before booking." />
            <Reason icon={Star} title="Quality-focused" text="We want every job to feel simple, safe, and worth recommending." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="quotePanel">
          {[
            "Fresh kitchens, cleaner bathrooms, calmer homes.",
            "Need a reset? We’ll help make the mess feel manageable.",
            "Built for Batesville families who need honest local help.",
          ].map((quote) => <div className="quoteTile" key={quote}>“{quote}”</div>)}
        </div>
      </section>

      <section className="whiteSection">
        <div className="twoCol">
          <Card className="infoCard">
            <h2>What’s Included</h2>
            <div className="checkList">
              {included.map((item) => (
                <div key={item}><CheckCircle size={16} /> {item}</div>
              ))}
            </div>
          </Card>

          <Card className="infoCard">
            <h2>Simple Policies</h2>
            <Policy title="Free Estimates" text="Final pricing depends on home size, condition, number of rooms, pets, clutter level, and the type of cleaning needed." />
            <Policy title="Scheduling" text="Appointments are confirmed by text or phone before arrival." />
            <Policy title="Cancellation Notice" text="Please provide at least 24 hours notice for cancellations whenever possible." />
            <Policy title="Pets" text="Friendly pets are welcome, but please let us know ahead of time." />
            <Policy title="Supplies" text="Cleaning supplies can be provided unless you prefer your own products be used." />
            <Policy title="Payment" text="Payment is due after the cleaning is completed unless otherwise arranged." />
          </Card>
        </div>
      </section>

      <section id="booking" className="bookingSection">
        <div className="twoCol">
          <div>
            <p className="eyebrow">Request a cleaning</p>
            <h2>Request a free cleaning estimate.</h2>
            <p>Tell us the basics about your home, what needs the most attention, and your preferred timing. We’ll follow up with questions, photos if needed, and a clear estimate before scheduling.</p>
            <p className="desktopNote">On a phone, texting works best. On a computer, use email, call, or copy the request and send it however you prefer.</p>
            <div className="contactBox">
              <p className="contactTitle">Contact Hayden Moore</p>
              <p><Phone size={16} /> 870-613-0544</p>
              <p><Mail size={16} /> moorehaydenalex@gmail.com</p>
              <p><MapPin size={16} /> Batesville, Southside, Cushman, Newark, Oil Trough, Pleasant Plains, and nearby areas by request</p>
            </div>
          </div>

          <Card className="formCard">
            <label>Name<input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></label>
            <label>Phone<input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Your phone number" /></label>
            <label>Service needed
              <select value={form.service} onChange={(e) => update("service", e.target.value)}>
                <option>Standard Home Cleaning Estimate</option>
                <option>Deep Cleaning Estimate</option>
                <option>Move-In / Move-Out Cleaning Estimate</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>Details<textarea value={form.details} onChange={(e) => update("details", e.target.value)} placeholder="Bedrooms, bathrooms, pets, preferred day, and what needs the most attention." /></label>
            <div className="formActions">
              <a href={`mailto:moorehaydenalex@gmail.com?subject=${emailSubject}&body=${emailBody}`}>
                <Button>Email My Free Estimate Request</Button>
              </a>
              <a href={`sms:8706130544?&body=${smsText}`}>
                <Button variant="outline">Text Request on Mobile</Button>
              </a>
              <a href="tel:8706130544">
                <Button variant="outline">Call for Estimate</Button>
              </a>
              <Button type="button" variant="outline" onClick={copyEstimate}>Copy Request Details</Button>
            </div>
            <div className="requestPreview">
              <p>Request preview</p>
              <span>{estimateMessage}</span>
            </div>
            <p className="smallText">Free estimates are available. Final pricing depends on home size, condition, number of rooms, pets, clutter level, and the type of cleaning needed.</p>
          </Card>
        </div>
      </section>

      <footer>
        <p><strong>White River Cleaning</strong></p>
        <p>Serving Batesville and nearby Arkansas areas</p>
        <p>© 2026 White River Cleaning. All rights reserved.</p>
      </footer>
    </main>
  );
}

function Reason({ icon: Icon, title, text }) {
  return (
    <div className="reason">
      <div className="reasonIcon"><Icon size={20} /></div>
      <div><h3>{title}</h3><p>{text}</p></div>
    </div>
  );
}

function Policy({ title, text }) {
  return (
    <div className="policy"><p>{title}</p><span>{text}</span></div>
  );
}
