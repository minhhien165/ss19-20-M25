"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isSignedIn ? (
        <button onClick={handleSignOut}>Đăng xuất</button>
      ) : (
        <button onClick={handleSignIn}>Đăng nhập</button>
      )}
    </div>
  );
}
