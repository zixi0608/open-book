import * as types from '../types';
import regeneratorRuntime from "regenerator-runtime";
import store from '../store';



export const remove_key = key => async dispatch => {
    dispatch({
        type : types.DELKEY_NOTE,
        key : key
    })
}

export const add_key = key => async dispatch => {
    dispatch({
        type : types.ADDKEY_NOTE,
        key : key
    })
}

export const edit_note = title => async dispatch => {
    if (!title) dispatch({
        type : types.EDIT_NOTE,
    });
    else {
        const note = store.getState().notebook[title]
        dispatch({
            type : types.LOAD_NOTE,
            note : {
                ...note,
                title : title,
            },
        })
    }
}

export const load_note = title => async dispatch => {
    const note = store.getState().notebook[title]

    dispatch({
        type : types.LOAD_NOTE,
        note : {
            ...note,
            title : title,
        },
    })
}

export const clear_note = () => async dispatch => {
    dispatch({
        type : types.CLEAR_NOTE
    })
}