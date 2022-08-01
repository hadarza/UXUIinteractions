import { configureStore } from "@reduxjs/toolkit";
import PageSelection from './PageSelection'
export const store = configureStore({
    reducer:{PageSelection:PageSelection}
})