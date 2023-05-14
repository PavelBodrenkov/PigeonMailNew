import {tabKey} from "widgets/NavBar/ui/services";
import {createSlice} from "@reduxjs/toolkit";

const initialState:{activeTab:tabKey} = {
    activeTab:tabKey.CHAT
}

export const tabsSlice = createSlice({
    name:'tabs',
    initialState,
    reducers: {
        setTabs:(state, action) => {
            state.activeTab = action.payload
        }
    }
})

export const {actions:tabsActions} = tabsSlice
export const {reducer:tabsReducer} = tabsSlice