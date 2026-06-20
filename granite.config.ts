import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "moisam",
  brand: {
    displayName: "모이삼",
    primaryColor: "#3182F6",
    icon: "https://static.toss.im/appsintoss/2679/6f1b1ca6-4cde-4c4c-ae86-153bbf49d3a2.png",
  },
  web: {
    host: "localhost",
    port: 5173,
    commands: {
      dev: "vite --host",
      build: "vite build",
    },
  },
  permissions: [
    {
      name: "clipboard",
      access: "read",
    },
    {
      name: "geolocation",
      access: "access",
    },
  ],
  outdir: "dist",
});
