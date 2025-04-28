import { Facebook, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
        <div className="border-t border-purple-800 text-purple-200 flex items-center justify-between py-4 px-8">
          <p>Copyright &copy; {new Date().getFullYear()} by <a href="/">Rare Teck</a>. All rights reserved | Powered by <a href="">AURA ENTERPRISES</a></p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/rareteck" className="bg-white rounded-full flex items-center justify-center p-1"><Facebook className="w-6 h-6 text-purple-500" /></a>
            <a href="https://www.instagram.com/rareteck" className="bg-white rounded-full flex items-center justify-center p-1"><Instagram className="w-6 h-6 text-pink-500" /></a>
          </div>
      </div>
    </footer>
  )
}

export default Footer