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

export const codeUpdator = createSlice({
    name: "code-updator",
    
})