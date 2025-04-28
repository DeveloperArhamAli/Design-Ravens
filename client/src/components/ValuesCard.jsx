function ValuesCard({
    icon,
    heading,
    description
}) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{heading}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}
export default ValuesCard