export default function AccentTag({ subtitle, title, isCentered = false }) {
  const className = `d-flex align-items-center gap-1 color-accent text-uppercase small ${
    isCentered ? "justify-content-center" : ""
  }`;
  return (
    <>
      <div className={className}>
        <span style={{ width: "35px" }}>
          <hr className="opacity-75" />
        </span>
        <span>{subtitle}</span>
      </div>
      <h2>{title} </h2>
    </>
  );
}
