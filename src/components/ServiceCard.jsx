function ServiceCard({
    icon,
    heading,
    description,
}) {
    return (
        <div className="bg-blue-50 rounded-lg p-8 transition-all hover:shadow-lg">
            {icon}
            <h3 className="text-xl font-bold mb-3 text-gray-800">{heading}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
        </div>
    )
}
export default ServiceCard