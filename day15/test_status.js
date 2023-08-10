module.exports = (status) => {
    switch(status) {
        case 'to-do': return true;
        case 'on-progress': return true;
        case 'done': return true;
        default: return false;
    }
}