     function treelize(items, id = null, link = 'parentId') {
        return (items
        .filter((item) => {
            return item[link]?.toString() === id?.toString()
        })
        .map((item) => {
           return { ...item, children:  treelize(items, item._id) }
            }))
        }

        module.exports = treelize