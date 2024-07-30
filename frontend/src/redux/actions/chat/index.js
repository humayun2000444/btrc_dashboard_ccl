import axios from "axios"

export const getChats = () => {
  return dispatch => {
    axios
      .get("api/app/chat/chats")
      .then(response => {
        dispatch({
          type: "GET_CONTACTS",
          contacts: response.data.contacts,
          chats: response.data.chats
        })
      })
      .catch()
  }
}

export const getContactChats = () => {
  return dispatch => {
    axios
      .get("api/app/chat/chat-contacts")
      .then(response => {
        dispatch({
          type: "GET_CHAT_CONTACTS",
          chats: response.data
        })
      })
      .catch()
  }
}

export const togglePinned = (id, value) => {
  return dispatch => {
    axios
      .post("/api/apps/chat/set-pinned/", {
        contactId: id,
        value
      })
      .then(response => {
        dispatch({
          type: "SET_PINNED",
          id,
          value
        })
      })
      .catch()
  }
}

export const sendMessage = (id, isPinned, text) => {
  if (text.length > 0) {
    return dispatch => {
      let newMsg = {
        textContent: text,
        isSent: true,
        isSeen: false,
        time: new Date().toString()
      }
      axios
        .post("/api/app/chat/send-message", {
          contactId: id,
          message: newMsg,
          isPinned
        })
        .then(response => {
          dispatch({
            type: "SEND_MESSAGE",
            msg: newMsg,
            id,
            isPinned,
            text
          })
          dispatch(getChats())
        })
        .catch()
    }
  } else {
    return
  }
}

export const changeStatus = status => {
  return dispatch => {
    dispatch({
      type: "CHANGE_STATUS",
      status
    })
  }
}

export const searchContacts = query => {
  return dispatch => {
    dispatch({
      type: "SEARCH_CONTACTS",
      query
    })
  }
}

export const markSeenAllMessages = id => {
  return dispatch => {
    axios
      .post("/api/apps/chat/mark-all-seen/", {
        contactId: id
      })
      .then(response => {
        dispatch({
          type: "MARK_AS_SEEN",
          id
        })
      })
      .catch()
  }
}
