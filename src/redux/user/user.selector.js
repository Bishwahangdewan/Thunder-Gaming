import { createSelector } from 'reselect';

//input selector
export const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)