export const genTree = (dataCsv: Array<any>) : object => {
    return {
        authors: dataCsv.reduce((acc, item) => {
            const node = acc.find(({ author }) => author === item.author);
            if (node) {
                node.books.push({
                    title: item.title,
                    description: item.description
                });
            } else {
                acc.push({
                    author: item.author,
                    books: [{
                        title: item.title,
                        description: item.description
                    }]
                });
            }
            return acc;
        }, [])
    };
};