import { CREATE_EVENT, UPDTAE_EVENT, DELETE_EVENT } from "./eventConstants"

export const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        payload: {
            event //payload.event
        }
    }
}

export const updateEvent = (event) => {
    return {
        type: UPDTAE_EVENT,
        payload: {
            event
        }
    }
}

export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        payload: {
            eventId  
        }
    }
}
