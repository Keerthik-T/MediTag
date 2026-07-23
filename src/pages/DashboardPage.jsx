import { Activity, Clock, Zap, MapPin } from 'lucide-react'
import useStore from '../store/useStore'
import NfcBridgeStatus from '../components/NfcBridgeStatus'

const DashboardPage = () => {
  const { isOnline } = useStore()
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Hospital Kiosk Dashboard</h1>
          <p className="text-slate-500 mt-1">Real-time emergency tap monitoring and bridge status.</p>
        </div>
        <div className="flex gap-4">
          <NfcBridgeStatus />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center">
          <div className="bg-blue-50 p-4 rounded-lg mr-4">
            <Zap className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-500">Avg Scan Time</div>
            <div className="text-2xl font-bold text-slate-900">1.2s</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center">
          <div className="bg-medical-red/10 p-4 rounded-lg mr-4">
            <Activity className="h-6 w-6 text-medical-red" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-500">Active Emergency Tags</div>
            <div className="text-2xl font-bold text-slate-900">14,205</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center">
          <div className="bg-medical-green/10 p-4 rounded-lg mr-4">
            <Clock className="h-6 w-6 text-medical-green" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-500">System Uptime</div>
            <div className="text-2xl font-bold text-slate-900">99.99%</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <h2 className="font-bold text-slate-900 flex items-center"><MapPin className="h-4 w-4 mr-2" /> Live Scan Feed</h2>
          <div className="flex items-center space-x-2">
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-medical-red"></span>
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase">Live</span>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { id: '1', time: 'Just now', loc: 'ER Triage Desk', type: 'High Priority', tagId: 'TAG-8821' },
            { id: '2', time: '2 min ago', loc: 'Ambulance Unit 4', type: 'Routine', tagId: 'TAG-1029' },
            { id: '3', time: '15 min ago', loc: 'Kiosk Terminal A', type: 'Registration', tagId: 'TAG-4412' }
          ].map(log => (
            <div key={log.id} className="px-6 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
              <div>
                <div className="font-medium text-slate-900">{log.loc}</div>
                <div className="text-sm text-slate-500 font-mono mt-1">{log.tagId}</div>
              </div>
              <div className="text-right">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  log.type === 'High Priority' ? 'bg-red-100 text-red-800' : 'bg-slate-100 text-slate-800'
                }`}>
                  {log.type}
                </span>
                <div className="text-xs text-slate-400 mt-2">{log.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
