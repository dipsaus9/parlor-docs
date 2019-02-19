module.exports = {
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "Parlor",
  themeConfig: {
    lastUpdated: "Laatste update",
    navbar: true,
    sidebar: [
      {
        title: "Design brief",
        collapsable: false,
        children: [
          ["design_brief/voorblad", "Voorblad"],
          "design_brief/introductie",
          "design_brief/probleem"
        ]
      }
    ],
    nav: [{ text: "Home", link: "/" }]
  }
};
