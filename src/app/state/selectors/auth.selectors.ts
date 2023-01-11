import { createSelector } from "@ngrx/store";
import { AuthState } from "src/app/models/auth.state";
import { AppState } from "../app.state";


export const selectAuthFeature= (state: AppState) => state.auths; // padre


export const selectIsLoadingLogin= createSelector(
    selectAuthFeature,
    (state: AuthState) => state.isLoading
);


export const selectIsErrorLogin= createSelector(
    selectAuthFeature,
    (state: AuthState) => state.isError
);