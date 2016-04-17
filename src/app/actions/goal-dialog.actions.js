export const OPEN_NEW_GOAL_DIALOG = 'open_new_goal_dialog';

export function openNewGoalDialog(goal) {
    return {
        type: OPEN_NEW_GOAL_DIALOG,
        payload: goal
    }
}

export const CLOSE_NEW_GOAL_DIALOG = 'close_new_goal_dialog';

export function closeNewGoalDialog() {
    return {
        type: CLOSE_NEW_GOAL_DIALOG
    }
}