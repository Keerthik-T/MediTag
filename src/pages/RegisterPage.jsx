import { useState } from 'react'
import { Save, CheckCircle2, Loader2, HardDrive } from 'lucide-react'
import NfcBridgeStatus from '../components/NfcBridgeStatus'
import useStore from '../store/useStore'

const RegisterPage = () => {
  const [step, setStep] = useState(1)
  const [isWriting, setIsWriting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const handleWriteToTag = (e) => {
    e.preventDefault()
    setIsWriting(true)
    // Simulate hardware bridge communication
    setTimeout(() => {
      setIsWriting(false)
      setIsSuccess(true)
    }, 3000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Patient Registration & Tag Provisioning</h1>
          <p className="text-slate-500 mt-2">Create a secure profile and provision an NFC tag.</p>
        </div>
        <NfcBridgeStatus />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex border-b border-slate-200 bg-slate-50">
          {[1, 2, 3].map((num) => (
            <div key={num} className={`flex-1 py-4 text-center text-sm font-medium ${step >= num ? 'text-medical-navy border-b-2 border-medical-navy' : 'text-slate-400'}`}>
              Step {num}: {num === 1 ? 'Identity' : num === 2 ? 'Health Data' : 'Provisioning'}
            </div>
          ))}
        </div>

        <div className="p-6 md:p-8">
          {step === 1 && (
            <form onSubmit={() => setStep(2)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full rounded-md border-slate-300 shadow-sm focus:border-medical-navy focus:ring-medical-navy p-2 border" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Age & Gender</label>
                  <div className="flex gap-2">
                    <input type="number" className="w-24 rounded-md border-slate-300 shadow-sm p-2 border" placeholder="Age" required />
                    <select className="flex-1 rounded-md border-slate-300 shadow-sm p-2 border">
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Blood Group</label>
                  <select className="w-full rounded-md border-slate-300 shadow-sm p-2 border">
                    <option>A+</option><option>O+</option><option>B+</option><option>AB+</option>
                    <option>A-</option><option>O-</option><option>B-</option><option>AB-</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Primary Emergency Contact</label>
                  <input type="tel" className="w-full rounded-md border-slate-300 shadow-sm p-2 border" placeholder="+1 (555) 000-0000" required />
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-medical-navy text-white px-6 py-2 rounded-md hover:bg-slate-800 transition-colors">Next Step</button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={() => setStep(3)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Severe Allergies (Comma separated)</label>
                <textarea className="w-full rounded-md border-slate-300 shadow-sm p-2 border h-24" placeholder="e.g. Penicillin, Peanuts"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Chronic Conditions</label>
                <textarea className="w-full rounded-md border-slate-300 shadow-sm p-2 border h-24" placeholder="e.g. Type 1 Diabetes, Asthma"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Medications</label>
                <textarea className="w-full rounded-md border-slate-300 shadow-sm p-2 border h-24" placeholder="e.g. Insulin Glargine, Albuterol Inhaler"></textarea>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(1)} className="text-slate-600 px-6 py-2">Back</button>
                <button type="submit" className="bg-medical-navy text-white px-6 py-2 rounded-md hover:bg-slate-800 transition-colors">Next Step</button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-10">
              <HardDrive className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Ready to Provision Tag</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Place the NTAG216 physical tag on the scanner. The payload will be encrypted with AES-256 before writing.
              </p>
              
              {!isSuccess ? (
                <button 
                  onClick={handleWriteToTag}
                  disabled={isWriting}
                  className={`inline-flex items-center px-8 py-4 rounded-lg font-bold text-white text-lg transition-all
                    ${isWriting ? 'bg-medical-yellow cursor-wait' : 'bg-medical-green hover:bg-green-700 shadow-lg shadow-green-500/30'}
                  `}
                >
                  {isWriting ? (
                    <><Loader2 className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" /> Encrypting & Writing...</>
                  ) : (
                    <><Save className="-ml-1 mr-3 h-6 w-6" /> Write to Hardware Tag</>
                  )}
                </button>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
                  <CheckCircle2 className="h-12 w-12 text-medical-green mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-medical-green">Tag Successfully Provisioned!</h3>
                  <p className="text-green-700 text-sm mt-1">The tag is now ready for emergency use.</p>
                  <button onClick={() => { setStep(1); setIsSuccess(false); }} className="mt-4 text-sm font-medium text-medical-navy underline">Register Another</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
