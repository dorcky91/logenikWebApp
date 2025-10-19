import { useState, useRef, useEffect } from "react";

export const LanguageDropdown = ({
  languages,
  currentLang,
  onChange,
  mobileOnly,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected =
    languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div ref={ref} className="language-dropdown position-relative">
      <button
        className="btn btn-outline-secondary d-flex align-items-center gap-2"
        onClick={() => setOpen((prev) => !prev)}>
        <img
          src={`/flags/${selected.flag}.png`}
          alt={selected.name}
          width={18}
          height={14}
        />
        {!mobileOnly && (
          <>
            <span className="d-none d-md-inline">{selected.name}</span>
            <span className="ms-1 d-none d-md-inline">▾</span>
          </>
        )}
      </button>

      {open && (
        <ul
          className="dropdown-menu show position-absolute end-0 mt-1 shadow-sm"
          style={{ minWidth: 120 }}>
          {languages.map((lng) => (
            <li key={lng.code}>
              <button
                className="dropdown-item d-flex align-items-center gap-2"
                onClick={() => {
                  onChange(lng.code);
                  setOpen(false);
                }}>
                <img
                  src={`/flags/${lng.flag}.png`}
                  alt={lng.name}
                  width={18}
                  height={14}
                />
                {!mobileOnly && <span>{lng.name}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
