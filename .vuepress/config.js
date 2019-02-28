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
          "design_brief/introductie",
          "design_brief/probleem",
          "design_brief/stakeholders",
          "design_brief/kansen",
          "design_brief/design_brief",
          "design_brief/visie",
          "design_brief/bronnen",
          "design_brief/bijlage"
        ]
      },
			{
        title: "Planning",
        collapsable: false,
				children: [
					"planning/planning"
				]
      }
    ],
    nav: [{ text: "Home", link: "/" }, { text: "Github", link: "https://github.com/dipsaus9/parlor"}]
  }
};
