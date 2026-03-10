function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/70 border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Alejandro Yavico</h1>

        <ul className="flex gap-8 font-medium">
          <li className="hover:text-gray-500 cursor-pointer">Inicio</li>
          <li className="hover:text-gray-500 cursor-pointer">Proyectos</li>
          <li className="hover:text-gray-500 cursor-pointer">Contacto</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
