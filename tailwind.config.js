export default {
  content: ["./{src/**/,}*.{js,jsx,ts,tsx,html,svelte,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, ui-sans-serif, system-ui, sans-serif",
        inter: "Inter, ui-sans-serif, system-ui, sans-serif",
      },
      backgroundImage: {
        "t-bg-ellipse-12heart-small":
          "url(/assets/Ellipse.svg)",
        "g-922500x":
          "url(/assets/g-922500x-7.png)",
        "download-appstore":
          "url(/assets/download-appstore.png)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
