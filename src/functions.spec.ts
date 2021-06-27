import { average } from "./functions";

describe('Average FN', () => {
    it('should work', () => {
        expect(average(1,2,3)).toEqual('Average is 2');
        expect(average('2',2)).toEqual('Average is 2');
        expect(average(2,'2')).toEqual('Average is 2');
    })
})
