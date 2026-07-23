const EmergencyBadge = ({ label, type }) => {
  const styles = {
    allergy: 'bg-red-600 text-white border-red-500',
    condition: 'bg-yellow-500 text-slate-900 border-yellow-400',
    default: 'bg-slate-700 text-white border-slate-600'
  }

  const badgeStyle = styles[type] || styles.default

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border shadow-sm ${badgeStyle}`}>
      {label}
    </span>
  )
}

export default EmergencyBadge
