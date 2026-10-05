import { useParams, Link } from 'react-router-dom';

export default function UserDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <p>Details for user ID: {id} (to be completed in Slice 6).</p>
      <Link to="/users">Back to Users</Link>
    </div>
  );
}
