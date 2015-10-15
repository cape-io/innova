import fetch from 'isomorphic-fetch';

const REQUEST = 'youtube/REQUEST';
const RECEIVE = 'youtube/RECEIVE';
const REQUEST_FAILURE = 'youtube/REQUEST_FAILURE';

const initialState = {
  items: [],
  isFetching: false,
  lastUpdated: null,
  errorMsg: null,
  reqError: false,
  onLine: true,
};

function isOnLine() {
  return navigator.onLine;
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
        lastUpdated: Date.now(),
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        reqError: true,
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
}

// Most likely a network failure.
function handleAsyncFailure(errorMsg = '') {
  // @TODO do something with err.
  return {
    type: REQUEST_FAILURE,
    payload: {
      errorMsg,
      onLine: isOnLine(),
    },
  };
}
function requestItems() {
  return {
    type: REQUEST,
  };
}

function fixItem({snippet: {title, thumbnails, resourceId}}) {
  return {
    title,
    thumbnail: thumbnails.default,
    videoId: resourceId.videoId,
  };
}
function transformer(data) {
  return data.items.map(fixItem);
}
function receiveItems(data) {
  // @TODO Look for errors in the response.
  if (data.reqError) {
    return handleAsyncFailure(data.errorMsg);
  }
  return {
    type: RECEIVE,
    payload: transformer(data),
  };
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else if (response.status === 400) {
    return {
      reqError: true,
      errorMsg: 'Invalid request.',
    };
  }
  // Probably a server error.
  return {
    errorMsg: response.statusText,
    statusCode: response.status,
    reqError: true,
  };
}

export function fetchItems({playlistId, key, maxResults}) {
  const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&';
  const args = `playlistId=${playlistId}&key=${key}&maxResults=${maxResults}`;
  return dispatch => {
    if (!isOnLine()) {
      dispatch(handleAsyncFailure('It looks like you are offline.'));
      return;
    }
    // if (asyncValidating) {
    //   return;
    // }
    dispatch(requestItems());
    fetch(url + args)
      .then(checkStatus)
      .then(json => dispatch(receiveItems(json)))
      .catch((err) => dispatch(handleAsyncFailure(err)));
  };
}
