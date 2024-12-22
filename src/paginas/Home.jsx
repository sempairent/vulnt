
import VulnerabilityCard from '../components/VulnerabilityCard';
import { cveData } from '../data/vulnerabilities';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar vulnerabilidades por el cve
  const filteredVulnerabilities = cveData.filter((vulnerability) =>
    vulnerability.cve.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className=" bg-gradient-to-r from-gray-900 via-cyan-900 to-gray-700 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />



      <div className="container mx-auto p-4 pt-24">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-8">
          Análisis de Vulnerabilidades
        </h2>
        {/* Barra de búsqueda */}
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Buscar por CVE"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded border border-gray-400 bg-gray-800 text-white focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVulnerabilities.map((vulnerability) => (
            <VulnerabilityCard
              key={vulnerability.id}
              cve={vulnerability.cve}
              descripcion={vulnerability.descripcion}
              mitigar={vulnerability.mitigar}
              criticidad={vulnerability.criticidad}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
