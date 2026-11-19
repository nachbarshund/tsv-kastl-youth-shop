// Wird bei jeder Navigation neu eingehängt und löst die Einblend-Animation aus.
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
