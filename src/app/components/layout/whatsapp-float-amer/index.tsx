// Server Component — static link, no hooks needed

const WHATSAPP_URL =
  "https://wa.me/573182723559?text=Hola%2C%20quiero%20cotizar%20un%20seguro";

const WhatsAppFloat = () => {
  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="whatsapp-float-btn"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          width: "60px",
          height: "60px",
          background: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.8rem",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          zIndex: 999,
          textDecoration: "none",
          transition: "all 0.3s",
        }}
      >
        <i className="bi bi-whatsapp" />
      </a>

      <style>{`
        .whatsapp-float-btn:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 6px 28px rgba(37,211,102,0.5) !important;
          color: white !important;
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;
