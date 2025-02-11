/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "tutorial" }],
  apiSidebar: [
    { type: "doc", id: "ref/index" },
    {
      type: "category",
      label: "Style",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "ref/style/index",
        },
        {
          type: "category",
          label: "Shape Library",
          items: [{ type: "autogenerated", dirName: "ref/style/shapes" }],
        },
        {
          type: "doc",
          label: "Function Library",
          id: "ref/style/functions",
        },
        {
          type: "doc",
          label: "Passthrough SVG",
          id: "ref/style/passthrough",
        },
        {
          type: "doc",
          label: "Syntax",
          id: "ref/style/syntax",
        },
        {
          type: "doc",
          label: "Examples",
          id: "ref/style/examples",
        },
      ],
    },
    {
      type: "category",
      label: "Substance",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "ref/substance/index",
        },
        {
          type: "doc",
          label: "Syntax",
          id: "ref/substance/syntax",
        },
        {
          type: "doc",
          label: "Examples",
          id: "ref/substance/examples",
        },
      ],
    },
    {
      type: "category",
      label: "Domain",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "ref/domain/index",
        },
        {
          type: "doc",
          label: "Syntax",
          id: "ref/domain/syntax",
        },
        {
          type: "doc",
          label: "Examples",
          id: "ref/domain/examples",
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
