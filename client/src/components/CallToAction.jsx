function CallToAction({
    title,
    description,
    button,
}) {
    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 blur-3xl opacity-30"></div>
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-white/70 mb-8 max-w-2xl mx-auto">{description}</p>
                    {button}
                </div>
            </div>
        </section>
    )
}
export default CallToAction