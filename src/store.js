// création du store :

import {configureStore} from "@reduxjs/toolkit"
import tabs from "./features/tabs" // feature

// on ajoute le reducer crée ds createSlice au store :
export const store = configureStore({
    reducer: {
        tabs
    }
})

