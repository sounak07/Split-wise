export const getByValue = (map, searchValue) => {
    for (const [key, value] of map.entries()) {
        if (value === searchValue)
            return key;
    }
};
