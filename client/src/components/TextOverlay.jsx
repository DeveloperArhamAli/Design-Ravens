function TextOverlay({
    children
}) {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm text-white/70 mb-6">
            <div className="size-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"></div>
            {children}
        </div>
    )
}
export default TextOverlay