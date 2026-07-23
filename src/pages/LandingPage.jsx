import { Link } from 'react-router-dom'
import { Activity, ShieldAlert, WifiOff, Smartphone, Stethoscope } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-medical-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Activity className="h-24 w-24 text-medical-red mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Zero-Latency <span className="text-medical-red">Emergency</span> Health Identification
          </h1>
          <p className="mt-4 max-w-2xl text-xl mx-auto text-slate-300">
            Meditag bridges the physical and digital. Secure, offline-capable medical profiles for first responders, powered by MedGemma clinical triaging.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/register" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-medical-red hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg shadow-red-500/30">
              Register Emergency Tag
            </Link>
            <Link to="/emergency/test-id-123" className="px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 md:py-4 md:text-lg md:px-10 transition-colors">
              Live Demo Kiosk
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">System Architecture & Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<WifiOff className="h-8 w-8 text-medical-green" />}
              title="Offline AES-256 Decryption"
              description="Critical data is stored directly on the NTAG216 chip, fully accessible without cellular service."
            />
            <FeatureCard 
              icon={<Stethoscope className="h-8 w-8 text-medical-yellow" />}
              title="MedGemma AI Summaries"
              description="Instant clinical triage copilot highlighting contraindications and immediate paramedic actions."
            />
            <FeatureCard 
              icon={<ShieldAlert className="h-8 w-8 text-medical-red" />}
              title="ABHA Integration"
              description="Seamlessly links to the Ayushman Bharat Health Account for comprehensive medical history when online."
            />
            <FeatureCard 
              icon={<Smartphone className="h-8 w-8 text-blue-500" />}
              title="Instant Kiosk Scanning"
              description="Rapid tap-to-scan capability using Arduino Leonardo hardware bridges or native NFC phones."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="bg-slate-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 border border-slate-100">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
)

export default LandingPage
