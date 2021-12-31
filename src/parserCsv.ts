export const parserCsv = (dateCsv: string, extname: string) => {
    if (extname !== 'csv') {
        throw new Error('Unexpected file');
    };
    const items = dateCsv.split('\n');
    return items.map((item) => {
        const [title, author, description] = item.split('; ');
        return {title, author, description};
    });
}