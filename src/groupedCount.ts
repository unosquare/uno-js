export const groupedCount = (data: any[], prop: string) => data
    .reduce((array: any[], current: any) => {
        const index = array.findIndex((x: any) => x[prop] === current[prop]);
        if (index >= 0) {
            array[index].Count++;
        } else {
            array.push(Object.assign({ Count: 1, [prop]: current[prop] }));
        }
        return array;
    }, [])
    .map((x: any) => ({ name: x[prop], value: x.Count }))
    .sort((a: any, b: any) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);