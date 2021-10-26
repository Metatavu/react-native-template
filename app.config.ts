import { ExpoConfig, ConfigContext } from "@expo/config";
import "dotenv/config";

/**
 * Custom mapper for Expo config plugin
 * Maps environment variables to Expo's manifest,
 * so they can be accessed inside Expo app.
 *
 * !!! DO NOT PUT ANY SECRETS TO ENVIRONMENT VARIABLES !!!
 */
export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: config.name || "example",
  slug: config.slug || "example",
  extra: {
    ...config.extra,
    ...process.env
  }
});
