/*define the operation on the states*/
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const GET_CITIES = 'GET_CITIES';

const API_URl = 'https://mocki.io/v1/8821b5d0-ebe8-46f2-a589-03ba38c0c071';

export const getCities = () => {
    try {
      
        return async dispatch => {
            const result = await fetch(
                API_URl, {
                //GET
                 method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                } 

       /*          //POST
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        param1: 'your value',
                        param2: 'your value'
                    }
                ) */
            }
            );
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_CITIES,
                    payload: json
                })
            } else {
                console.log('Unable to fetch!')
            }
        }
    } catch (error) {
        console.log(error)
    }
};

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    })
};

export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    })
};
export const increaseAge = age => dispatch => {
    dispatch({
        type: INCREASE_AGE,
        payload: age,
    })
};
