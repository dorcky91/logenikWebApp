import { useEffect, useRef, useState } from "react";

const LazyVideo = ({ src, height = 350, className = "" }) => {
  const containerRef = useRef(null); // ref del contenedor
  const videoRef = useRef(null); // ref del <video>
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // 👈 Nuevo estado de carga

  // Detecta cuando el contenedor entra al viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Recarga el video cuando cambia el src
  useEffect(() => {
    if (videoRef.current && isVisible) {
      setIsLoaded(false); // reinicia el loading
      videoRef.current.pause();
      videoRef.current.src = src;
      videoRef.current.load();
      videoRef.current
        .play()
        .then(() => setIsLoaded(true))
        .catch(() => {});
    }
  }, [src, isVisible]);

  return (
    <div
      ref={containerRef}
      style={{ height }}
      className="overflow-hidden rounded-3">
      {/* Loader o fondo de espera */}
      {!isLoaded && (
        <div
          style={{
            height: "100%",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e9ecef",
            borderRadius: "12px",
          }}>
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "2.5rem", height: "2.5rem" }}>
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}

      {/* Video */}
      {isVisible && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onLoadedData={() => setIsLoaded(true)} // ✅ marca como cargado cuando el video está listo
          style={{
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
            opacity: isLoaded ? 1 : 0,
          }}
          className={className}>
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default LazyVideo;
