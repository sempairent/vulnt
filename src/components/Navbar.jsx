

export default function Navbar() {
  return (
    <>
     <nav className="bg-gradient-to-r from-gray-800 via-cyan-700 to-green-700 p-6 fixed w-full top-0 left-0 z-10 shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-3xl font-bold text-white hover:text-green-400 transition-all duration-300 cursor-pointer">
      CVE Análisis
    </h1>
    <div>
      <a href="/" className="text-white hover:text-green-400 px-4 py-2 transition-all duration-300">Inicio</a>
      <a href="/media" className="text-white hover:text-green-400 px-4 py-2 transition-all duration-300">V. Media</a>
      <a href="/baja" className="text-white hover:text-green-400 px-4 py-2 transition-all duration-300">V. Baja</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAlWUoAnLTw55nFt7rkNghUzoxe2nr9xhIDAbWZ1299aJ0Aw/viewform?usp=sf_link" className="text-white hover:text-green-400 px-4 py-2 transition-all duration-300">Encuesta</a>
    </div>
  </div>
</nav>
    </>
  )
}
