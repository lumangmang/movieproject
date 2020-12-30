/**
 * movieproject.
 * Create by Devin on 2020/12/30.
 *
 * Copyright (c) 2020-present, Devin.
 * All rights reserved.
 *
 */

import {CALL_API, Schemas} from "../../middleware/api";
import Types from '../types';

export const REPO_REQUEST = 'REPO_REQUEST'
export const REPO_SUCCESS = 'REPO_SUCCESS'
export const REPO_FAILURE = 'REPO_FAILURE'

const fetchRepo = fullName => ({
    [CALL_API]: {
        types: [REPO_FAILURE, REPO_REQUEST, REPO_SUCCESS],
        endpoint: `repos/${fullName}`,
        schema: Schemas.REPO,
    }
});

export const loadRepo = (fullName, requiredFields = []) => (dispatch, getState) => {
    const repo = getState().entities.repos[fullName]
    if (repo && requiredFields.every(key => repo.hasOwnProperty(key))) {
        return null
    }
    return dispatch(fetchRepo(fullName))
}


const fetchStarred = (login, nextPageUrl) => ({
    login,
    [CALL_API]: {
        types: [ Types.STARRED_REQUEST, Types.STARRED_SUCCESS, Types.STARRED_FAILURE ],
        endpoint: nextPageUrl,
        schema: Schemas.REPO_ARRAY
    }
})

export const loadStarred = (login, nextPage) => (dispatch, getState) => {

    console.log('.........login',login);
    const {
        nextPageUrl = `users/${login}/starred`,
        pageCount = 0
    } = getState().pagination.starredByUser[login] || {}

    if (pageCount > 0 && !nextPage) {
        return null
    }

    return dispatch(fetchStarred(login, nextPageUrl))
}
