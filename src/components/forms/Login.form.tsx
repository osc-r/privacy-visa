import { Button, Grid2 as Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { web3auth } from "../../app/layout";

export default function LoginForm() {
  const router = useRouter();

  const onClickConnectWeb3 = () => {
    router.replace("/cards");
  };

  const onClickConnectWeb3Auth = async () => {
    // IMP START - Login
    await web3auth.connect();
    // IMP END - Login
    if (web3auth.connected) {
      router.replace("/cards");
    }
    /**
     * in order to save a provider object
     * might consider save it with zustand
     *  */
  };

  return (
    <>
      <Grid size={12}>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={onClickConnectWeb3Auth}
        >
          Connect with Web3Auth
        </Button>
      </Grid>
      <Grid size={12}>
        <Button
          fullWidth
          variant="outlined"
          color="success"
          onClick={onClickConnectWeb3}
        >
          Connect with Bitkub
        </Button>
      </Grid>
      <Grid size={12}>
        <Button
          fullWidth
          variant="outlined"
          color="warning"
          onClick={onClickConnectWeb3}
        >
          Connect with Privy
        </Button>
      </Grid>
    </>
  );
}
