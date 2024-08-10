import {createSlice} from "@reduxjs/toolkit"
import {html, css, js} from "../assets/index"

const initialState = [
    {
        id: 1,
        lang: "html",
        imageURL: html,
        buttonContent: "HTML",
        code: `<!DOCTYPE html>
        <html>
        <head>
            <title>Page Title</title>
        </head>
        <body>
            <h1>This is a Heading</h1>
            <p>This is a paragraph.</p>
        </body>
        </html>`
    },
    {
        id: 2,
        lang: "css",
        imageURL: css,
        buttonContent: "CSS",
        code: `body{
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }`
    },
    {
        id: 3,
        lang: "js",
        imageURL: js,
        buttonContent: "JavaScript",
        code: `console.log("Hey");`
    },
]

// Ici on crée un slice pour la gestion des onglets
export const codeUpdator = createSlice({
    name: "code-updator",
    initialState, // valeur de départ pour le store
    reducers: {
        updateCode: (state, action) => {
            state.find(obj => obj.id === action.payload.id).code =
            action.payload.value  
            // on cherche le bon obj pour le changer (qd on change le code)
            // obj.id c'est id de html, css ou js et action.payload.id c'est l'id de l'onglet cliqué.
            // action.payload.value c'est le code qu'on a tapé dans l'onglet
            // ccl : changer le code de l'onglet cliqué

            // ici on change le state, à la base on doit pas le faire mais bon redux toolkit le permet.
        
        }
    }
})

export const {updateCode} = codeUpdator.actions 
// on exporte l'action updateCode pour l'utiliser dans les composants

export default codeUpdator.reducer
// on exporte le reducer pour l'utiliser dans le store