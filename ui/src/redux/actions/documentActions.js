import * as actionTypes from './actionTypes';
const {v4:uuidv4} = require('uuid');

export const setSkinCd = (skinCd) => {
    let id = uuidv4();
    return {type:actionTypes.SET_SKIN,payload:{id:id,skinCd:skinCd}}
}

export const updateSkinCd = (skinCd) => {
    return {type:actionTypes.UPDATE_SKIN,payload:{skinCd:skinCd}}
}

