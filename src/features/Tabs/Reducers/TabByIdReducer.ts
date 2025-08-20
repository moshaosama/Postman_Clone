import {createSlice, Slice} from "@reduxjs/toolkit";
import { fetchGetTabByid} from "../Actions/TabsActions";

interface initialStateData {
    data: {
        id: number;
        method: string;
        url: string;
    }[] | null;
    loading: boolean;
    error: string;
}

const initialState: initialStateData = {
    data: null,
    loading: false,
    error: "",
};

const tabsByIdSlices: Slice = createSlice({
    initialState,
    name: "TabByid",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGetTabByid.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchGetTabByid.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });

        builder.addCase(fetchGetTabByid.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default tabsByIdSlices.reducer;
