export const redeploy = async () => {
  // uses Cloudflare Deploy Hooks
  // see https://developers.cloudflare.com/pages/configuration/deploy-hooks/
  // In local development we don't want any redeployments though
  if (process.env.CLOUDFLARE_DEPLOY_HOOK) {
    await fetch(process.env.CLOUDFLARE_DEPLOY_HOOK, { method: "POST" });
  }
};
