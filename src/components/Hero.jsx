function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-7xl font-bold mb-6">Alejandro Yavico</h1>

      <p className="text-xl text-gray-500 max-w-xl">
        Diseñador y programador especializado en desarrollo web moderno,
        interfaces elegantes y experiencias interactivas.
      </p>

      <button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
        Ver proyectos
      </button>
    </section>
  );
}

export default Hero;
