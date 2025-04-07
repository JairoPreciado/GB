"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yjeqo8e",//aqui va el id del servicio del correo de gb
        "template_gc9dx5h",//aqui va el id del template del correo de gb
        form,
        "OCzlzOAMJoDif2pI3"//aqui va el id del usuario del correo de gb
      )
      .then(
        () => {
          alert("✅ Tu mensaje ha sido enviado correctamente.");
          setForm({
            nombres: "",
            apellidos: "",
            email: "",
            telefono: "",
            mensaje: "",
          });
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          alert("❌ Ocurrió un error al enviar el mensaje.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1 text-gray-700">Nombres</label>
          <input
            type="text"
            name="nombres"
            value={form.nombres}
            onChange={handleChange}
            required
            placeholder="Bonnie"
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-700">Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={form.apellidos}
            onChange={handleChange}
            required
            placeholder="Green"
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-700">Tu correo electrónico</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="name@gbcolima.com"
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-700">Tu número telefónico</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            required
            placeholder="+(52) 312 123 4567"
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-700">Tu mensaje</label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows={4}
          required
          placeholder="Escribe tu mensaje aquí..."
          className="w-full p-2 rounded border border-gray-300"
        ></textarea>
      </div>

      <div className="flex items-start">
        <input type="checkbox" id="terms" required className="mr-2 mt-1" />
        <label htmlFor="terms" className="block text-sm text-gray-700">
          Confirmo haber leído y aceptado los{" "}
          <a href="#" className="underline text-blue-800">términos y condiciones</a> y{" "}
          <a href="#" className="underline text-blue-800">políticas de privacidad</a>.
        </label>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded"
      >
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactForm;
