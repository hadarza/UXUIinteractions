import { configureStore } from "@reduxjs/toolkit";
import PageSelection from '../features/PageSelection'
export const store = configureStore({
    reducer:{PageSelection:PageSelection}
})