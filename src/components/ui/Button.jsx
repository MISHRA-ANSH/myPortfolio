function Button({ label, variant = "primary" }) {
  const styles = {
    padding: "12px 28px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px",
    background: variant === "primary" ? "#ffffff" : "#111827",
    color: variant === "primary" ? "#4f46e5" : "#ffffff",
  };

  return <button style={styles}>{label}</button>;
}

export default Button;
