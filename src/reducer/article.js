import { UPLOAD_ARTICLE } from '../action';
import { initialState } from '../const/initialState';

const article = (state = initialState.article, action) => {
    switch (action.type) {
        case UPLOAD_ARTICLE:
            return {
                ...state,
                id: action.payload.id,
            };
        default:
            return state;
    }
}

export default article;