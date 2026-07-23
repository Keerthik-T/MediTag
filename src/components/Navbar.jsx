import { Link } from 'react-router-dom'
import { Activity, Signal, Wifi, WifiOff } from 'lucide-react'
import useStore from '../store/useStore'

const Navbar = () => {
  const { isOnline, hardwareConnected } = useStore()

  return (
    <nav className="bg-medical-navy text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-medical-red" />
            <span className="font-bold text-xl tracking-tight">Meditag</span>
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/register" className="hover:text-medical-red transition-colors">Register</Link>
            <Link to="/emergency/test-id-123" className="hover:text-medical-red transition-colors">Demo Triage</Link>
            <Link to="/dashboard" className="hover:text-medical-red transition-colors">Dashboard</Link>
            
            <div className="flex items-center space-x-4 border-l border-slate-700 pl-4">
              <div className="flex items-center space-x-1" title="Network Status">
                {isOnline ? <Wifi className="h-4 w-4 text-medical-green" /> : <WifiOff className="h-4 w-4 text-medical-red" />}
                <span className="text-xs text-slate-300">{isOnline ? 'Online' : 'Offline'}</span>
              </div>
              <div className="flex items-center space-x-1" title="Hardware Bridge">
                <Signal className={`h-4 w-4 ${hardwareConnected ? 'text-medical-green' : 'text-slate-500'}`} />
                <span className="text-xs text-slate-300">Bridge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
