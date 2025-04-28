function TestimonialCard({
    stars = 5,
    testimonial,
    name,
    designation,
    image,
}) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <div className="text-purple-600">
                    {[...Array(stars)].map((_, i) => (
                    <span key={i} className="text-xl">
                        ★
                    </span>
                    ))}
                </div>
            </div>
            <blockquote className="text-gray-600 mb-4">"{testimonial}"</blockquote>
            <div className="flex items-center">
                <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <p className="font-bold text-gray-800">{name}</p>
                    <p className="text-gray-600 text-sm">{designation}</p>
                </div>
            </div>
        </div>
    )
}
export default TestimonialCard