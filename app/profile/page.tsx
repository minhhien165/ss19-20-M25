import { useAuth, useUser } from "@clerk/nextjs";

export default function Profile() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Không có thông tin. Vui lòng đăng nhập.</div>;
  }

  return (
    <div>
      <h1>Họ và tên: {user?.fullName}</h1>
      <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
    </div>
  );
}
