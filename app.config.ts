
import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: "Controle Financeiro",
  slug: "controle-financeiro",
  scheme: "controlefinanceiro",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  ios: { supportsTablet: false, bundleIdentifier: "com.gabriela.controlefinanceiro" },
  android: { package: "com.gabriela.controlefinanceiro" },
  extra: {},
  plugins: ["expo-router"],
  experiments: { typedRoutes: true }
});
