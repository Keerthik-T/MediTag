import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="flex items-center text-sm">
            Built with <Heart className="h-4 w-4 mx-1 text-medical-red" /> for emergency responders.
          </p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a href="#" className="hover:text-white transition-colors">Privacy & HIPAA</a>
          <a href="https://github.com/Keerthik-T/MediTag" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
