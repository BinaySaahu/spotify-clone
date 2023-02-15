export const initialState = {
    user:null,
    playlist:[],
    playing:false,
    item:null,
    // token:"BQA4GnSjMmaVoPcUU7KeQkvBy_nUCvb_XaEEw4APj9qTzjZLmAKrWSDTuQ2lPiGtOo4BddJetW3sFW6Cxb_IdiDHsvL6_96VqTuYF9y3clxAOcsjXgJvV7KSk9yqXCplXn8K7XoCPJKc3Kw3EaZ8FG66QN2H3p1ob92gtawtqoo9N4X38K0m5Lf9lYcL6ZyF3dU3"
}

const reducer = (state, action) =>{
    console.log(action)

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user

            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token

            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists: action.playlists

            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly

            }

        default:
            return state;
    }
}

export default reducer;