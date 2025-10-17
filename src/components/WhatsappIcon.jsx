const WhatsAppIcon = ({
  phoneNumber = "5215551234567",
  message = "¡Hola! Quisiera más información.",
}) => {
  return (
    <a
      id="whatsapp-icon"
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
      <i className="bi bi-whatsapp fs-5" style={{ color: "white" }}></i>
    </a>
  );
};

export default WhatsAppIcon;
