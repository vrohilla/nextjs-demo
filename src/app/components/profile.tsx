'use client';
import { useUser } from "@auth0/nextjs-auth0"



export const User = () => {
  const { user, isLoading } = useUser();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {user && (
        <div style={{ textAlign: "center" }}>
          <img
            src={user.picture}
            alt="Profile"
            style={{ borderRadius: "50%", width: "80px", height: "80px" }}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

/*
export default function Profile() {
  const { user, isLoading } = useUser();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {user && (
        <div style={{ textAlign: "center" }}>
          <img
            src={user.picture}
            alt="Profile"
            style={{ borderRadius: "50%", width: "80px", height: "80px" }}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </>
  );
}*/