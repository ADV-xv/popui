export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "14px",
        background: "#6C25FF",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}