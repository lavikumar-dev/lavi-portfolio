import { FaPaperPlane } from "react-icons/fa";

function SubmitButton({ children = "Send Message", type = "submit", disabled = false, loading = false }) {
  return (
    <button type={type} disabled={disabled || loading} className="theme-form-submit group">
      <span className="theme-form-submit-shine" />
      <FaPaperPlane className="relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      <span className="relative">{loading ? "Sending..." : children}</span>
    </button>
  );
}
export default SubmitButton;
