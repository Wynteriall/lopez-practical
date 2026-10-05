import { Link } from 'react-router-dom';
import Button from './Button';

export default function UserCard({
  id,
  name,
  email,
  company,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '12px',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 8px' }}>{name}</h3>
          <p style={{ margin: '0 0 4px', color: '#4b5563' }}>{email}</p>
          <p style={{ margin: 0, color: '#6b7280' }}>{company}</p>
        </div>

        <Button
          variant={isFavorite ? 'danger' : 'primary'}
          onClick={() => onToggleFavorite(id)}
          label={isFavorite ? 'Unfavorite' : 'Favorite'}
        />
      </div>

      <div style={{ marginTop: '16px' }}>
        <Link
          to={`/users/${id}`}
          style={{
            color: '#2563eb',
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          View details
        </Link>
      </div>
    </div>
  );
}
