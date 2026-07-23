import { useState, useEffect } from 'react'
import { Plug, WifiOff } from 'lucide-react'
import useStore from '../store/useStore'

const NfcBridgeStatus = () => {
  const { hardwareConnected, setHardwareConnected } = useStore()
  const [isConnecting, setIsConnecting] = useState(false)

  const toggleConnection = () => {
    if (hardwareConnected) {
      setHardwareConnected(false)
    } else {
      setIsConnecting(true)
      setTimeout(() => {
        setIsConnecting(false)
        setHardwareConnected(true)
      }, 1500)
    }
  }

  return (
    <button 
      onClick={toggleConnection}
      disabled={isConnecting}
      className={`inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium transition-colors ${
        hardwareConnected 
          ? 'border-green-500 text-green-700 bg-green-50 hover:bg-green-100'
          : 'border-slate-300 text-slate-700 bg-white hover:bg-slate-50'
      }`}
    >
      {isConnecting ? (
        <span className="flex items-center">
          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-700 mr-2"></span>
          Connecting Bridge...
        </span>
      ) : hardwareConnected ? (
        <span className="flex items-center">
          <Plug className="mr-2 h-4 w-4 text-green-500" />
          COM3: NTAG216 Ready
        </span>
      ) : (
        <span className="flex items-center">
          <WifiOff className="mr-2 h-4 w-4 text-slate-400" />
          Bridge Disconnected
        </span>
      )}
    </button>
  )
}

export default NfcBridgeStatus
