import { Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react'

const MedGemmaSummaryCard = ({ patient }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-l-purple-600 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4">
        <Sparkles className="h-6 w-6 text-purple-300 opacity-50" />
      </div>
      
      <div className="flex items-center mb-4">
        <div className="bg-purple-100 p-2 rounded-lg mr-3">
          <Sparkles className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 leading-tight">AI Clinical Triaging Copilot</h2>
          <div className="text-xs text-purple-600 font-bold uppercase tracking-widest mt-0.5">Powered by MedGemma 4B</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-red-50 rounded-xl p-4 border border-red-100">
          <h3 className="flex items-center text-red-800 font-bold mb-2 text-sm uppercase tracking-wider">
            <AlertTriangle className="h-4 w-4 mr-1.5" /> High-Priority Conflicts
          </h3>
          <ul className="text-red-700 text-sm space-y-1 ml-5 list-disc">
            <li><strong>Severe Penicillin Allergy</strong>: Do not administer any beta-lactam antibiotics.</li>
            <li><strong>Type 1 Diabetes</strong>: Patient requires strict glucose monitoring. Avoid corticosteroids if possible as they may spike blood sugar.</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-xl p-4 border border-green-100">
          <h3 className="flex items-center text-green-800 font-bold mb-2 text-sm uppercase tracking-wider">
            <CheckCircle2 className="h-4 w-4 mr-1.5" /> Recommended Immediate Actions
          </h3>
          <ul className="text-green-700 text-sm space-y-1 ml-5 list-disc">
            <li>Establish IV access immediately.</li>
            <li>Check blood glucose levels (fingerstick).</li>
            <li>Prepare alternative antibiotics (e.g., Macrolides) if infection is suspected.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MedGemmaSummaryCard
