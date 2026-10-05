export default function Button({ label, onClick, variant = 'primary', children, ...rest }) {
  const baseStyle = {
    padding: '8px 14px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: '1px solid transparent',
    fontWeight: '500',
    fontSize: '14px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      borderColor: '#1d4ed8',
    },
    danger: {
      backgroundColor: '#dc2626',
      color: '#ffffff',
      borderColor: '#b91c1c',
    },
  };

  const chosenStyle = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ ...baseStyle, ...chosenStyle }}
      {...rest}
    >
      {label || children}
    </button>
  );
}
