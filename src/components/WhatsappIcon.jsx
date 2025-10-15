const WhatsAppIcon = ({
  phoneNumber = "5215551234567",
  message = "¡Hola! Quisiera más información.",
}) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
      <i className="bi bi-whatsapp fs-3" style={{ color: "white" }}></i>
    </a>
  );
};

export default WhatsAppIcon;
