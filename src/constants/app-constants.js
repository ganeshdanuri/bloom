import {
  dracula,
  abcdef,
  abyss,
  androidstudio,
  andromeda,
  aura,
  atomone,
  bbedit,
  bespin,
  copilot,
  eclipse,
  material,
  monokai,
  nord,
  quietlight,
  sublime,
} from "@uiw/codemirror-themes-all";

export const themes = {
  abcdef,
  abyss,
  androidstudio,
  dracula,
  andromeda,
  atomone,
  aura,
  bbedit,
  bespin,
  copilot,
  eclipse,
  material,
  monokai,
  nord,
  quietlight,
  sublime,
};

export const initialTheme = themes.atomone; // defined above

export const initalThemeLabel = "Atomone";
export const initalModeLabel = "Web";

export const htmlInitialValue = `<h1> Hello World ! </h1>`;

export const cssInitialValue = `* {
    box-sizing: border-box;
}`;

export const jsInitialValue = `console.log('hello world!');`;

export const themeList = [
  {
    value: "abcdef",
    label: "Abcdef",
  },
  {
    value: "abyss",
    label: "Abyss",
  },
  {
    value: "androidstudio",
    label: "Androidstudio",
  },
  {
    value: "andromeda",
    label: "Andromeda",
  },
  {
    value: "atomone",
    label: "Atomone",
  },
  {
    value: "aura",
    label: "Aura",
  },
  {
    value: "bbedit",
    label: "Bbedit",
  },
  {
    value: "bespin",
    label: "Bespin",
  },
  {
    value: "copilot",
    label: "Copilot",
  },
  {
    value: "dracula",
    label: "Dracula",
  },
  {
    value: "eclipse",
    label: "Eclipse",
  },
  {
    value: "material",
    label: "Material",
  },
  {
    value: "monokai",
    label: "Monokai",
  },
  {
    value: "nord",
    label: "Nord",
  },
  {
    value: "quietlight",
    label: "Quietlight",
  },
  {
    value: "sublime",
    label: "Sublime",
  },
];

export const modeList = [
  {
    value: "web",
    label: "Web",
  },
  {
    value: "javascript",
    label: "Javascript",
  },
];
