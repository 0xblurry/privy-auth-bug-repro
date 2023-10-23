To reproduce bug

1. Copy `.env` to `.env.local` and populate.
2. `yarn install && yarn dev`
3. Login with privy
4. Refresh the page.

If successfully reproducing the issue, you should see that `authenticated` from the `usePrivy` hook in `EthBalance.tsx` is showing as `true`, but the `isConnected` flag from `useAccount` is false, and therefore `useBalance` will not be working.
If you make any changes to the `EthBalance` component while running `yarn dev`, the HMR triggers, and the value of `authenticated` is updated correctly. This leads me to believe that there's a listener missing somewhere (if react, maybe a missing `useEffect` dep).
