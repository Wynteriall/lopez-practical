import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { users as userList } from '../data/users';

export default function UserDetails() {
  const { id } = useParams();
  const user = userList.find((person) => person.id === Number(id)) ?? null;

  useEffect(() => {
    if (user) {
      document.title = user.name;
      return;
    }

    document.title = id ? 'User not found' : 'User details';
  }, [id, user]);

  if (!user) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Link to="/users" style={{ color: '#2563eb', fontWeight: '600' }}>
          ← Back to Users
        </Link>
        <div
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '24px',
            backgroundColor: '#ffffff',
          }}
        >
          <h1 style={{ marginTop: 0 }}>User not found</h1>
          <p style={{ margin: 0 }}>
            We couldn&apos;t find a user with ID: {id}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Link to="/users" style={{ color: '#2563eb', fontWeight: '600' }}>
        ← Back to Users
      </Link>

      <div
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '24px',
          backgroundColor: '#ffffff',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h1 style={{ margin: '0 0 16px' }}>{user.name}</h1>

        <div style={{ display: 'grid', gap: '12px' }}>
          <p style={{ margin: 0 }}>
            <strong>Email:</strong> {user.email}
          </p>
          <p style={{ margin: 0 }}>
            <strong>Company:</strong> {user.company}
          </p>
          <p style={{ margin: 0 }}>
            <strong>Role:</strong> {user.role}
          </p>
        </div>
      </div>
    </div>
  );
}
