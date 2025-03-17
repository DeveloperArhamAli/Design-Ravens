function WhyChooseUsCard({
    icon,
    heading,
    description
}) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex space-x-4">
            {icon}
            <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{heading}</h3>
                <p className="text-gray-600">
                {description}
                </p>
            </div>
            </div>
        </div>
    )
}
export default WhyChooseUsCard