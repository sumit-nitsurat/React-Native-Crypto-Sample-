import axios from 'axios';
import { cryptoCompareurl } from './../Utils/Constants';
import {
    FECTHING_NEWS,
    FECTHING_NEWS_SUCCESS,
    FECTHING_NEWS_FAIL,
} from './../Utils/ActionTypes';


export default function FetchNews() {
    return dispatch => {

        dispatch({ type: FECTHING_NEWS })

        return axios.get(`${cryptoCompareurl}/data/news/?lang=EN`)
            .then(res => {
                return dispatch({ type: FECTHING_NEWS_SUCCESS, payload: res.data });                
            })
            .catch(err => {
                return dispatch({ type: FECTHING_NEWS_FAIL, payload: err });
            });   

    }
}

