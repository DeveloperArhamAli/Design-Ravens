function ProcessCard({
    stepNumber,
    stepTitle,
    stepDescription
}) {
    return (
        <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 text-2xl font-bold rounded-lg px-4 py-2 mr-4">
                {stepNumber}
                </div>
                <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{stepTitle}</h3>
                <p className="text-gray-600">{stepDescription}</p>
                </div>
            </div>
        </div>
    )
}
export default ProcessCard