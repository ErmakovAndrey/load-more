export default function loadMore(res, loadLength) {
    const messages = []

    if (res.length > loadLength) {
        for (let i = 0; i < loadLength; i++) {
            //main - false to main - true
            res[i].main = true
            messages.push(res[i])
        }
    } else {
        res.forEach(item => {
            item.main = true
            messages.push(item)
        }); 
    }
    return messages
}