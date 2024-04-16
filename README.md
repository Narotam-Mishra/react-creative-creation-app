
# [Creative Dashboard UI](https://react-creative-creation-app.vercel.app/)

## Layout:
- [The main area consists of the Creative Dashboard with a list of Creatives.]
- [Initially, the list is empty.
]
- [Above the list, there's a section for filtering Creatives.]
- [On the right side, an "Add Creative" button is present.
]

## Filtering Section:
- [We can perform filtering by text (title or subtitle, partial and case-insensitive).]

## Creative List:
1. [This section displays all Creatives as previews.]
2. [Each preview is a rectangle where]
    - [Background color matches the chosen color from creation.]
    - [Text inside the rectangle displays the title (bold) and subtitle.]

## Creative Creation Drawer:
1. [Clicking "Add Creative" opens the drawer, taking up 35% of the screen width.]
2. [The "Add Creative" button becomes disabled while the drawer is open.]
3. [The drawer contains a form with three fields:]
   - [Title (text input)]
   - [Subtitle (text input)]
   - [Background Color (color picker component that fetches available colors via API)]
4. [All fields are mandatory, indicated with an asterisk (*).]
5. [The "Done" button is initially disabled and becomes enabled only when all fields are filled.]
6. [Clicking "Done":]
   - [Closes the drawer.]
   - [Enables the "Add Creative" button.]
   - [Adds a new Creative preview to the list with the entered details.]
7. [A "Close (X)" button is present in the drawer for manual closing.]

## UI Elements:
- [Used cards components for Creative previews.]
- [Implemented a color picker component for selecting background color.]
- [Used clear visual cues to indicate required fields and disabled buttons.]

## Additional Considerations:
- [Implemented error handling for invalid user inputs.]


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
