import { motion } from 'framer-motion';

function TeamMemberCard({
    keyProp,
    name,
    designation,
    image,
    profileLink,
}) {
    return (
        <motion.div key={keyProp} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: keyProp * 0.1 }} viewport={{ once: true }} className="group">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
                <div className="aspect-[3/4] relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{name}</h3>
                    <p className="text-cyan-400 text-sm mb-4">{designation}</p>
                    <a href={profileLink} target='_blank' className='bg-white text-[#050816] hover:bg-white/90 rounded-full flex items-center px-3 py-2 cursor-pointer justify-center'>View Profile</a>
                </div>
            </div>
        </motion.div>
    )
}
export default TeamMemberCard