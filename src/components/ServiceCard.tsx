export default function ServiceCard({
  icon,
  title,
  description,
  details,
}: {
  icon: string
  title: string
  description: string
  details: string[]
}) {
  return (
    <div className="service-card group">
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-2xl font-bold text-gold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-gray-400 text-sm flex items-start">
            <span className="text-gold mr-2">▸</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
