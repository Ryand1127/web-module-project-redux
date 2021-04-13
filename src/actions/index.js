export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (feat) => {
    return {
        type: ADD_FEATURE, payload: feat
    }
}

export const removeFeature = (feat) => {
    return {
        type: REMOVE_FEATURE, payload: feat
    }
}