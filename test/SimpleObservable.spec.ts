import { SimpleObservable } from '../src/SimpleObservable';

describe('SimpleObservable', () => {
    const observable = new SimpleObservable();
    let x = 5;
    
    const fm = observable.subscribe((status)=>{
        if(status == 'Count') x++;
    });

    observable.inform('Count');
    it('x shoud be: 6', () => {
        expect(x).toBe(6);
    });

    fm();
    observable.inform('Count');
    it('x shoud be: 6', () => {
        expect(x).toBe(6);
    });
});