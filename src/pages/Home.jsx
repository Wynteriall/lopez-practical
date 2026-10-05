import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div>
      <h1>Welcome to Team Directory</h1>
      <p>Browse our team members, manage favorites, and inspect profile details.</p>
    </div>
  );
}
