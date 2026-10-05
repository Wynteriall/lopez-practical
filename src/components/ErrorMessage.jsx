export default function ErrorMessage({ message = 'An error occurred.' }) {
  return (
    <div
      style={{
        padding: '12px 16px',
        backgroundColor: '#fee2e2',
        color: '#991b1b',
        border: '1px solid #f87171',
        borderRadius: '4px',
        margin: '12px 0',
      }}
    >
      {message}
    </div>
  );
}
