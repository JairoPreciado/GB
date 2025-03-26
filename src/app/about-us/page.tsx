import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">
      {/* Sección de imágenes */}
      <div className="flex gap-4">
        <img 
          src="/images/team1.jpg" 
          alt="logo" 
          className="w-1/2 rounded-2xl shadow-lg"
        />
        <img 
          src="/images/team2.jpg" 
          alt="fotillo de un trabajo" 
          className="w-1/2 rounded-2xl shadow-lg"
        />
      </div>

      {/* Sección de texto */}
      <div>
        <h3 className="text-[#455ee6] font-semibold mt-10 mb-6">¿QUIÉNES SOMOS?</h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          GB Reparación de Equipos de Cómputo.
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi exercitationem doloremque dolor dolore impedit? Fuga quidem consequatur est doloribus, sunt accusamus molestiae voluptatum rem vero sequi! Dignissimos, velit! Repellat, cum.
        </p>

        {/* Sección de misión y visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Misión */}
          <div className="flex items-center gap-4">
            <div className="bg-indigo-200 p-4 rounded-xl">
              <FontAwesomeIcon icon={faBullseye} className="text-indigo-700 w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Misión</h4>
              <p className="text-gray-600 text-sm">
                Through a dedication to continuous learning, we foster a dynamic workforce capable of addressing present-day challenges.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="flex items-center gap-4">
            <div className="bg-indigo-200 p-4 rounded-xl">
              <FontAwesomeIcon icon={faEye} className="text-indigo-700 w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Visión</h4>
              <p className="text-gray-600 text-sm">
                We are committed to transforming the landscape by equipping our team with the skills and knowledge needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
