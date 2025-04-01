"use client";

import { useState, useRef, useEffect } from "react";

type ChatMessage = {
  from: "user" | "bot";
  text: string;
};

export default function ChatWidget() {
  // Controla si el chat está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  // Controla si estamos haciendo hover sobre el botón flotante
  const [hovered, setHovered] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Llamada a tu backend (puedes comentar esto si no lo necesitas todavía)
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMessage: ChatMessage = {
        from: "bot",
        text: data.reply || "Respuesta no disponible.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err: unknown) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Error en el servidor." },
      ]);
    }
  };

  // Si el chat está cerrado, mostramos SOLO el botón lateral
  if (!isOpen) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          top: "50%",
          transform: "translateY(-50%)",
          width: "80px",
          height: "80px",
          // Mueve el botón hacia afuera (-40px) y lo mete o saca con hover
          right: hovered ? "-30px" : "-40px",
          backgroundColor: "#4ba3fe",
          color: "#fff",
          // Borde redondeado en el lado izquierdo
          borderRadius: "20px 0 0 20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 9999,
          transition: "right 0.3s",
          // Centra el ícono vertical y horizontalmente
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <i
          className="fas fa-robot"
          style={{ paddingLeft: "5px", fontSize: "24px" }}
        />
      </div>
    );
  }

  // Si el chat está ABIERTO, mostramos el contenedor lateral
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        right: "0px",
        width: "320px",
        height: "400px",
        backgroundColor: "#fff",
        borderRadius: "8px 0 0 8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#4ba3fe",
          color: "#fff",
          padding: "8px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Asistente Virtual</span>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          <i className="fas fa-times" />
        </button>
      </div>

      {/* Contenedor de mensajes */}
      <div
        ref={messagesContainerRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "8px",
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: "8px",
              maxWidth: "80%",
              alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.from === "user" ? "#cae4ff" : "#fff",
              padding: "8px",
              borderRadius: "4px",
              border: msg.from === "bot" ? "1px solid #ccc" : "none",
              wordWrap: "break-word",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        style={{
          borderTop: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1,
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px",
            marginRight: "8px",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            backgroundColor: "#4ba3fe",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-paper-plane" />
        </button>
      </div>
    </div>
  );
}
