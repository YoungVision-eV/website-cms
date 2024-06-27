export const redeploy = async () => {
  await fetch(
    "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/5d30d67d-725a-4c5f-9b60-83f1a457ac9d",
    { method: "POST" }
  );
};
