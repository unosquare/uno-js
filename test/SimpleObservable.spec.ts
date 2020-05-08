import { SimpleObservable } from '../src/SimpleObservable';

describe('SimpleObservable', () => {
    const observable = new SimpleObservable();
    let x = 5;
    
    const fm = observable.subscribe((status) => {
        if(status == 'Count') x++;
    });

    it('x shoud be: 6', () => {
        observable.inform('Count');
        expect(x).toBe(6);
    });

    it('x shoud be: 6', () => {
        fm();
        observable.inform('Count');
        expect(x).toBe(6);
    });
});