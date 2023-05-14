import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('width only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('width additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
    test('width mods', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrolled: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('width mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrolled: undefined },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
