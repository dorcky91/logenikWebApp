import "./Clientes.css";

export const Clientes = () => {
  return (
    <div className="carousel-container">
      <div className="animate-scroll">
        {/* Duplicamos los logos para scroll infinito */}
        {clients.concat(clients).map((client, idx) => (
          <img
            key={idx}
            src={client.logo}
            alt={client.name}
            className="client-logo"
          />
        ))}
      </div>
    </div>
  );
};

const clients = [
  {
    name: "ESI Unified",
    logo: "/images/clients/esi-unified.png",
  },
  {
    name: "Nora",
    logo: "/images/clients/nora.png",
  },

  {
    name: "Arche",
    logo: "/images/clients/logoArche.png",
  },

  {
    name: "Fashion Lover",
    logo: "/images/clients/fashion-lover.png",
  },
  {
    name: "WOLFGAIN",
    logo: "/images/clients/wolfgain.png",
  },

  {
    name: "Arche",
    logo: "/images/clients/arche.png",
  },
];
