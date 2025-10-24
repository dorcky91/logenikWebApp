export default function AccentTag({ subtitle, title, isCentered = false }) {
  const className = `d-flex align-items-center gap-1 color-accent text-uppercase small ${
    isCentered ? "justify-content-center" : ""
  }`;
  return (
    <>
      <div className={className}>
        <span data-aos="fade-up" style={{ width: "35px" }}>
          <hr className="opacity-75" />
        </span>
        <span data-aos="fade-up">{subtitle}</span>
      </div>
      <h2 data-aos="fade-up">{title} </h2>
    </>
  );
}
