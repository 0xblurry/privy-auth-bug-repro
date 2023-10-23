import { PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth";
import { PrivyWagmiConnector } from "@privy-io/wagmi-connector";
import { configureChains } from "wagmi";
import { arbitrum, arbitrumGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { EthBalance } from "./ETHBalance";
import { RequireAuthed } from "./RequireAuthed";

const privyConfig: PrivyClientConfig = {
  loginMethods: ["wallet", "twitter", "email"],
  appearance: {
    theme: "dark",
  },
  embeddedWallets: {
    createOnLogin: "all-users",
    noPromptOnSignature: true,
  },
};

// Replace the chains and providers with the ones used by your app.
// https://wagmi.sh/react/providers/configuring-chains
const configureChainsConfig = configureChains(
  [arbitrum, arbitrumGoerli],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY! }),
    publicProvider(),
  ]
);

function App() {
  return (
    <>
      <PrivyProvider
        appId={import.meta.env.VITE_PRIVY_APP_ID || ""}
        config={privyConfig}
      >
        <PrivyWagmiConnector wagmiChainsConfig={configureChainsConfig}>
          <RequireAuthed>
            <EthBalance />
          </RequireAuthed>
        </PrivyWagmiConnector>
      </PrivyProvider>
    </>
  );
}

export default App;
