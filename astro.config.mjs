// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Vercel Agent Skills",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/global.css",
      ],

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vercel-labs/agent-skills",
        },
      ],
      sidebar: [
        {
          label: "Skills",
          autogenerate: { directory: "/skills" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
