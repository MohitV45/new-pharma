import { Phone, Mail, MapPin, ArrowRight, MessageSquare, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion, Variants } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // [FINALIZED] Using user provided EmailJS credentials
    const SERVICE_ID = 'service_epts4gn';
    const TEMPLATE_ID = 'template_s9zt2tp';
    const PUBLIC_KEY = 'iIoQdcmmqFg60iWn9';

    // We'll add some extra mapping to match the template's right-side variables {{name}} and {{email}}
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      name: formData.name, // Mapping to {{name}} as seen in screenshot
      email: formData.email, // Mapping to {{email}} as seen in screenshot
      subject: formData.phone, // formData.phone holds the subject in our current state
      message: formData.message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert('Thank you for your inquiry! Our team will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Oops! Something went wrong. Please try again or contact us directly via email.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Inquiries',
      detail: '+91 1800-XXX-XXXX',
      subDetail: 'Direct line for manufacturers'
    },
    {
      icon: Mail,
      title: 'Direct Email',
      detail: 'info@reltsenhealthcare.com',
      subDetail: 'Corporate relations'
    },
    {
      icon: MapPin,
      title: 'Global Hub',
      detail: 'Mundiyampakkam, Villupuram',
      subDetail: 'Tamil Nadu, India'
    }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 overflow-hidden transition-colors duration-300 relative">
      {/* Top gradient fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column: Info */}
          <div className="lg:w-1/3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 text-amber-600 font-bold tracking-widest text-xs uppercase mb-4">
                <MessageSquare size={16} />
                Connect with us
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Partnering for Global <span className="text-amber-600">Health Solutions</span>
              </h2>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                Connect with our expert team to discuss your manufacturing requirements or explore technical partnerships.
              </p>

              <div className="space-y-10">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-amber-600 transition-colors duration-300">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">{info.title}</h3>
                      <p className="text-slate-900 font-medium mb-1 group-hover:text-amber-700 transition-colors duration-300">{info.detail}</p>
                      <p className="text-xs text-gray-400 font-bold">{info.subDetail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-10 md:p-16 rounded-sm border border-gray-100 shadow-2xl shadow-slate-200/50"
            >
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border-b-2 border-gray-200 py-3 px-1 focus:outline-none focus:border-amber-600 transition-colors text-slate-900 font-medium"
                    placeholder="e.g. Dr. John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Professional Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border-b-2 border-gray-200 py-3 px-1 focus:outline-none focus:border-amber-600 transition-colors text-slate-900 font-medium"
                    placeholder="john@organization.com"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject / Inquiry Type</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white border-b-2 border-gray-200 py-3 px-1 focus:outline-none focus:border-amber-600 transition-colors text-slate-900 font-medium"
                    placeholder="e.g. Contract Manufacturing Inquiry"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message Details</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-white border-b-2 border-gray-200 py-3 px-1 focus:outline-none focus:border-amber-600 transition-colors text-slate-900 font-medium resize-none"
                    placeholder="Please describe your requirements..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-6 flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group bg-slate-900 text-white px-10 py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-lg shadow-slate-900/25 transition-all duration-300 hover:bg-amber-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>

        {/* Global Location Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 filter grayscale-[100%] hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100"
        >
          <iframe 
            src="https://maps.google.com/maps?q=Reltsen%20Health%20Care%20Mundiyampakkam&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="350" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            title="Reltsen Hub Location"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}
