import { maxWidthText } from "./maxWidh";

describe('[FUNCTION] maxWidthText', () => {

    describe('', () => {
        it('should return greater value for text in bigger font-size', () => {
            expect(maxWidthText(['aaa'], '16px Arial')).toBeGreaterThan(maxWidthText(['aaa'], '12px Arial'));
        });
        it('text width should be equal to summary width of it"s characters', () => {
            expect(maxWidthText(['aaa'], '16px Arial')).toEqual(maxWidthText(['a'], '16px Arial') * 3 );
        });
        it('if monospace it should return same value for text of the same length', () => {
            expect(maxWidthText(['iii'], '16px Courier')).toEqual(maxWidthText(['wWw'], '16px Courier') );
        });
    });


    describe('examples', () => {
        it('if arguments are ["Monday", "Saturday", "Sunday"], "16px Arial" it should return 65', () => {
            expect(maxWidthText(['Monday', 'Saturday', 'Sunday'], '16px Arial')).toBe(65);
        });
        it('if arguments are ["morning", "night", "afternoon"], "10px sans-serif" it should return 43', () => {
            expect(maxWidthText(['morning', 'night', 'afternoon'], '10px sans-serif')).toBe(43);
        });
        it('if arguments are ["morning", "night", "afternoon"], "16px Arial" it should return 68', () => {
            expect(maxWidthText(['morning', 'night', 'afternoon'], '16px Arial')).toBe(68);
        });
    });
});
