import { useParams } from 'react-router-dom'
import { AlertCircle, Phone, FileText, Syringe, Activity, Clock, ShieldAlert } from 'lucide-react'
import useStore from '../store/useStore'
import EmergencyBadge from '../components/EmergencyBadge'
import MedGemmaSummaryCard from '../components/MedGemmaSummaryCard'

const EmergencyPage = () => {
  const { id } = useParams()
  const { getPatient, isOnline } = useStore()
  const patient = getPatient(id)

  if (!patient) {
    return <div className="p-8 text-center text-red-600 font-bold text-xl">Patient record not found.</div>
  }

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 pb-20">
      {/* Offline Mode Banner */}
      {!isOnline && (
        <div className="bg-medical-yellow text-slate-900 px-4 py-2 text-center text-sm font-bold flex items-center justify-center">
          <AlertCircle className="h-4 w-4 mr-2" />
          OFFLINE MODE: Data sourced natively from local NTAG216 chip.
        </div>
      )}

      {/* Hero Flash Card */}
      <div className="bg-medical-red p-6 shadow-lg rounded-b-3xl">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">{patient.name}</h1>
              <div className="text-red-200 mt-1 font-medium text-lg">
                {patient.age} Y/O • {patient.gender}
              </div>
            </div>
            <div className="text-right">
              <div className="text-6xl md:text-7xl font-black">{patient.bloodGroup}</div>
              <div className="text-red-200 text-sm font-bold uppercase tracking-widest mt-1">Blood Type</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {patient.allergies.map(allergy => (
              <EmergencyBadge key={allergy} label={allergy} type="allergy" />
            ))}
          </div>

          <a href={`tel:${patient.emergencyContact.phone}`} className="flex items-center justify-center w-full bg-white text-medical-red font-bold py-4 rounded-xl shadow-md text-lg active:scale-95 transition-transform">
            <Phone className="mr-2 h-6 w-6" />
            CALL EMERGENCY CONTACT ({patient.emergencyContact.relation})
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <MedGemmaSummaryCard patient={patient} />
        
        {/* Tabbed Details (Simplified for demo) */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
          <div className="p-5 border-b border-slate-700 flex items-center">
            <Activity className="h-5 w-5 text-blue-400 mr-2" />
            <h3 className="font-bold text-lg">Chronic Conditions</h3>
          </div>
          <div className="p-5">
            <ul className="space-y-3">
              {patient.conditions.map(c => (
                <li key={c} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 mr-3"></div>
                  <span className="text-slate-300 text-lg">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
          <div className="p-5 border-b border-slate-700 flex items-center">
            <Syringe className="h-5 w-5 text-purple-400 mr-2" />
            <h3 className="font-bold text-lg">Current Medications</h3>
          </div>
          <div className="p-5">
            <ul className="space-y-3">
              {patient.medications.map(m => (
                <li key={m} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mt-2 mr-3"></div>
                  <span className="text-slate-300 text-lg">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {isOnline && (
          <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700 flex justify-between items-center shadow-xl">
            <div>
              <div className="text-xs text-slate-400 font-bold tracking-widest uppercase mb-1">ABHA ID</div>
              <div className="font-mono text-lg text-slate-200">{patient.abhaId}</div>
            </div>
            <FileText className="h-8 w-8 text-medical-green opacity-50" />
          </div>
        )}
      </div>
    </div>
  )
}

export default EmergencyPage
