/*
function fetchPostsRequest() {
    return {
        type: 'FETCH_REQUEST'
    }
}

function fetchPostsSuccess(payload) {
    return {
        type: 'FETCH_SUCCESS',
        payload
    }
}

function fetchPostsError() {
    return {
        type: 'FETCH_ERROR'
    }
}

function fetchPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    return fetch(url, {method: 'GET'})
    .then(response => Promise.all([response, response.json()]));
}

function fetchPostsWithRedux() {
    return(dispatch) => {
        dispatch(fetchPostsRequest());
        return fetchPosts()
        .then(([Response, json])=>{
            if(Response.status === 200) {
                dispatch(fetchPostsSuccess(json))
            }
            else{
                dispatch(fetchPostsError())
            }
        })
    }
}
*/

function getData() {
    return {
        type: 'FETCH'
    }
}

function getSuccess(data) {
    return {
        type: 'FETCH_SUCCESS',
        payload: data
    }
}

function getFailed(err) {
    return {
        type: 'FAILED',
        payload: err
    }
}

export function fetchData() {
    const thunk = async function thunk(dispatch) {
        try {
            dispatch(getData());
            const body = await fetch("http://jsonplaceholder.typicode.com/users")
            const res = await body.json();
            console.log("Thunk", res);
            dispatch(getSuccess(res));
        }
        catch(err) {
            dispatch(getFailed(err));
        }
    }
    return thunk;
}
