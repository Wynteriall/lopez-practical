export default function Loader({ message = 'Loading...' }) {
  return (
    <div style={{ padding: '16px', textAlign: 'center', fontStyle: 'italic', color: '#6b7280' }}>
      {message}
    </div>
  );
}
