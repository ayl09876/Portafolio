function Projects() {
  return (
    <section className="py-32 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">Proyectos</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">Sistema de Cotizaciones</h3>
            <p className="text-gray-600">
              Plataforma desarrollada en Laravel para gestión de cotizaciones,
              clientes y exportación de PDF.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">Plugin Chatbot</h3>
            <p className="text-gray-600">
              Plugin para WordPress con sistema de agentes y notificaciones
              integradas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">Página Empresarial</h3>
            <p className="text-gray-600">
              Desarrollo web completo con animaciones modernas y diseño
              responsive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
