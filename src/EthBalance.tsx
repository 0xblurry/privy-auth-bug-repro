import { usePrivy } from "@privy-io/react-auth";
import { useAccount, useBalance } from "wagmi";

export const EthBalance = () => {
  const { address: _account, isConnected } = useAccount();
  const { data: balance } = useBalance({ address: _account, chainId: 421613 });
  const { authenticated } = usePrivy();

  return (
    <>
      <div>Wallet balance is {balance?.formatted.toString() || "-"} ETH</div>
      <div>isConnected: {isConnected.toString()} </div>
      <div>Authenticated (privy): {authenticated.toString()} </div>
    </>
  );
};
