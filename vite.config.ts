import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

// https://vitejs.dev/config/

const manifest = defineManifest({
  manifest_version: 3,
  name: "notiord",
  version: "0.1.0",
  permissions: ["storage", "contextMenus"],
  commands: {
    _execute_action: {
      suggested_key: {
        windows: "Ctrl+Shift+L",
        mac: "MacCtrl+Shift+N",
        chromeos: "Ctrl+Shift+L",
        linux: "Ctrl+Shift+L",
      },
    },
  },
  action: {
    default_popup: "popup.html",
    default_title: "notiord",
  },
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  host_permissions: ["https://*/*"],
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
