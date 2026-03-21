// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Newsreader",
      cssVariable: "--font-newsreader",
      display: "fallback",
      weights: [400, 700],
      styles: ["normal"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Fira Code",
      cssVariable: "--font-fira-code",
      display: "fallback",
      weights: [400],
      styles: ["normal"],
    },
  ],
  integrations: [react(), mdx()],
});
