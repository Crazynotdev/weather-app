import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.weatherpro",
  appName: "Weather App Pro",
  webDir: "dist",
  bundledWebRuntime: false,
  server: { androidScheme: "https" }
};

export default config;
