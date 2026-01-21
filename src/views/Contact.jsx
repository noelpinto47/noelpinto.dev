import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactService from "../services/contactService";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState({ 
        show: false,
        success: false, 
        message: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setLoading(true);
        
        try {
            await ContactService.submitContactForm(formData);
            
            setSubmitStatus({
                show: true,
                success: true,
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });
            
            // Reset form
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(prev => ({ ...prev, show: false }));
            }, 5000);
            
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus({
                show: true,
                success: false,
                message: error.message || 'Something went wrong. Please try again later.'
            });
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(prev => ({ ...prev, show: false }));
            }, 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            {/* Architectural Vertical Grid Lines (Background) */}
            <div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full h-full border-l border-r border-[#ffffff05] grid grid-cols-4 gap-4">
                    <div className="hidden sm:block border-r border-[#ffffff05] h-full"></div>
                    <div className="hidden md:block border-r border-[#ffffff05] h-full"></div>
                    <div className="hidden lg:block border-r border-[#ffffff05] h-full"></div>
                </div>
            </div>

            {/* Sticky Navigation */}
            <nav className="fixed top-0 left-0 w-full z-40 bg-background-dark/90 backdrop-blur-sm border-b border-border-subtle">
                <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold tracking-widest text-text-gray font-sans uppercase">
                            Fig. 04
                        </span>
                        <span className="w-px h-4 bg-primary mx-2"></span>
                        <Link
                            to="/"
                            className="text-sm font-bold tracking-wider text-text-cream hover:text-primary transition-colors duration-200"
                        >
                            [ NOEL PINTO ]
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-8">
                        <Link className="group flex flex-col items-center" to="/portfolio">
                            <span className="text-xs font-medium tracking-[0.2em] text-text-gray group-hover:text-white transition-colors">
                                WORK
                            </span>
                            <span className="w-0 group-hover:w-full h-[1px] bg-primary transition-all duration-300 mt-1"></span>
                        </Link>
                        <Link className="group flex flex-col items-center" to="/about">
                            <span className="text-xs font-medium tracking-[0.2em] text-text-gray group-hover:text-white transition-colors">
                                ABOUT
                            </span>
                            <span className="w-0 group-hover:w-full h-[1px] bg-primary transition-all duration-300 mt-1"></span>
                        </Link>
                        <Link className="group flex flex-col items-center" to="/contact">
                            <span className="text-xs font-medium tracking-[0.2em] text-white transition-colors">
                                CONTACT
                            </span>
                            <span className="w-full h-[1px] bg-primary mt-1 shadow-[0_0_8px_rgba(255,106,0,0.5)]"></span>
                        </Link>
                    </div>
                    <button className="md:hidden text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </nav>

            {/* Main Content Wrapper */}
            <main className="relative z-10 pt-20 flex flex-col items-center w-full flex-grow">
                <section className="w-full max-w-[1200px] px-6 py-12 md:py-20 flex flex-col justify-start flex-grow h-full">
                    {/* Hero Section */}
                    <div className="mb-16 md:mb-20 relative border-b border-border-subtle pb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h2 className="text-primary text-xs font-bold tracking-[0.4em] uppercase font-sans mb-4 pl-1 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary"></span>
                                    Transmission Mode
                                </h2>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter text-text-cream mix-blend-screen">
                                    CONTACT
                                </h1>
                            </div>
                            <div className="hidden md:block mb-4">
                                <div className="text-[10px] text-primary font-mono tracking-widest border border-primary px-3 py-1.5 uppercase bg-primary/5 shadow-[0_0_15px_rgba(255,106,0,0.1)]">
                                    Status: Accepting New Clients
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Status Message */}
                    {submitStatus.show && (
                        <div className={`mb-8 p-4 border rounded ${submitStatus.success ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'} animate-in fade-in slide-in-from-top-4 duration-300`}>
                            <p className="text-sm font-mono">{submitStatus.message}</p>
                        </div>
                    )}

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        {/* Left Column - Info */}
                        <div className="lg:col-span-5 flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            <div>
                                <p className="text-lg md:text-xl text-text-gray font-display italic leading-relaxed border-l-2 border-primary/50 pl-6 py-1">
                                    "Building precise digital architectures requires open channels. Initiate the sequence on the right or establish a direct link below."
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="h-px w-8 bg-border-subtle"></span>
                                        <h3 className="text-xs font-bold tracking-[0.2em] text-text-cream uppercase">
                                            Direct Connection
                                        </h3>
                                    </div>
                                    <a className="group block w-fit" href="mailto:hello@noelpinto.com">
                                        <div className="text-2xl md:text-3xl font-display text-text-cream group-hover:text-primary transition-colors flex items-center gap-3">
                                            <span>hello@noelpinto.com</span>
                                            <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary">
                                                arrow_outward
                                            </span>
                                        </div>
                                        <div className="h-px w-full bg-border-subtle mt-2 group-hover:bg-primary transition-colors duration-500"></div>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-dashed border-border-subtle/50 mt-4">
                                <div>
                                    <h4 className="text-[9px] font-mono tracking-widest text-text-gray mb-4 uppercase opacity-60">
                                        Social_Networks
                                    </h4>
                                    <ul className="flex flex-col gap-3 text-xs font-bold tracking-widest font-sans">
                                        <li>
                                            <a className="hover:text-primary transition-colors text-text-cream flex items-center gap-2" href="#">
                                                <span className="w-1 h-1 bg-text-gray rounded-full"></span> [ GITHUB ]
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-primary transition-colors text-text-cream flex items-center gap-2" href="#">
                                                <span className="w-1 h-1 bg-text-gray rounded-full"></span> [ LINKEDIN ]
                                            </a>
                                        </li>
                                        <li>
                                            <a className="hover:text-primary transition-colors text-text-cream flex items-center gap-2" href="#">
                                                <span className="w-1 h-1 bg-text-gray rounded-full"></span> [ TWITTER ]
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="text-right group cursor-crosshair">
                                        <span className="material-symbols-outlined text-primary/50 group-hover:text-primary mb-2 text-xl transition-colors">
                                            my_location
                                        </span>
                                        <p className="text-[10px] font-mono text-text-gray leading-tight group-hover:text-text-cream transition-colors">
                                            LAT: 19.0760° N<br />
                                            LON: 72.8777° E
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="lg:col-span-7 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative">
                                <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-text-gray/20"></div>
                                <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-text-gray/20"></div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Name Field */}
                                    <div className="group relative">
                                        <label className="block text-[10px] font-bold tracking-[0.2em] text-text-gray mb-3 uppercase group-focus-within:text-primary transition-colors">
                                            01 // Identification
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full bg-background-dark border ${errors.name ? 'border-red-500' : 'border-text-cream/30'} p-4 text-text-cream placeholder-text-gray/20 focus:border-primary focus:ring-0 outline-none transition-all duration-300 font-sans text-sm rounded-none hover:border-text-cream/50`}
                                            placeholder="ENTER NAME"
                                        />
                                        {errors.name && (
                                            <p className="text-red-400 text-xs mt-2 font-mono">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div className="group relative">
                                        <label className="block text-[10px] font-bold tracking-[0.2em] text-text-gray mb-3 uppercase group-focus-within:text-primary transition-colors">
                                            02 // Return Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full bg-background-dark border ${errors.email ? 'border-red-500' : 'border-text-cream/30'} p-4 text-text-cream placeholder-text-gray/20 focus:border-primary focus:ring-0 outline-none transition-all duration-300 font-sans text-sm rounded-none hover:border-text-cream/50`}
                                            placeholder="ENTER EMAIL"
                                        />
                                        {errors.email && (
                                            <p className="text-red-400 text-xs mt-2 font-mono">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="group relative">
                                    <label className="block text-[10px] font-bold tracking-[0.2em] text-text-gray mb-3 uppercase group-focus-within:text-primary transition-colors">
                                        03 // Data Packet
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full bg-background-dark border ${errors.message ? 'border-red-500' : 'border-text-cream/30'} p-4 text-text-cream placeholder-text-gray/20 focus:border-primary focus:ring-0 outline-none transition-all duration-300 font-sans text-sm rounded-none resize-none hover:border-text-cream/50`}
                                        placeholder="ENTER MESSAGE CONTENT..."
                                        rows="6"
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-xs mt-2 font-mono">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group relative bg-primary text-white hover:bg-white hover:text-black transition-all duration-300 py-4 px-10 text-xs font-bold tracking-[0.25em] uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none border border-transparent overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="relative z-10">
                                            {loading ? 'SENDING...' : '"Send Message"'}
                                        </span>
                                        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full border-t border-border-subtle bg-background-dark/50 backdrop-blur-sm z-20 mt-auto">
                    <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-text-gray text-[10px] font-mono tracking-widest uppercase opacity-50">
                            System Status: Operational
                        </div>
                        <div className="text-text-gray text-[10px] font-mono tracking-widest uppercase opacity-50">
                            © 2024 NOEL PINTO. EST. MUMBAI.
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
};

export default Contact;