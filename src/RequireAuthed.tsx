import { usePrivy } from "@privy-io/react-auth";
import { ReactNode } from "react";

export const RequireAuthed = ({ children }: { children: ReactNode }) => {
  const { authenticated, login, ready } = usePrivy();
  if (!ready) {
    return <>Loading...</>;
  } else if (authenticated) {
    return <>{children}</>;
  } else {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="font-bold">Login to continue</h1>
        <button
          onClick={login}
          className="mt-4 rounded bg-violet-800 p-2 px-4 text-violet-50"
        >
          Login
        </button>
      </div>
    );
  }
};
