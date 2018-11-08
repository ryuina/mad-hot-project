const UPLOAD_ARTICLE = 'UPLOAD_ARTICLE';

const uploadArticle = () => ({
    type: UPLOAD_ARTICLE,
    payload: {
        id: 1
    }
})


export {
    UPLOAD_ARTICLE,
    uploadArticle
}