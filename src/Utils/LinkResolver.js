module.exports = (doc) => {
    if (doc.link_type === 'Web')
        return doc.url;

    let uri = '/';
    switch(doc.type) {
        case 'homepage':
            break;
        case 'page':
            // FIXME: Handle parent-child relations.
            uri += doc.uid;
            break;
        default:
            return '';
    }

    return uri;
};
