import "./Clientes.css";

const clients = [
  {
    name: "Empresa 1",
    logo: "https://pub-e63b17b4d990438a83af58c15949f8a2.r2.dev/type/aven.png",
  },
  {
    name: "Empresa 2",
    logo: "/images/esi-unified.png",
  },
  {
    name: "Empresa 3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  },
  {
    name: "Empresa 4",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/FRONT3X-Logo.png",
  },
  {
    name: "Empresa 5",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png",
  },
  {
    name: "Empresa 6",
    logo: "https://res.cloudinary.com/djlxlz9y3/image/upload/v1761018700/fashion_fnw94y.png",
  },
];

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
