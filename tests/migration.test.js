const { removeApostrophe, removeDoubleQoutes } = require('../db/migrations/add-air-table');

test("change all apostrophe to \'", () => {
    expect(removeApostrophe("some'text'text")).toBe("some\''text\''text")
} )
test("remove all double qoutes", () => {
    expect(removeDoubleQoutes('"some text"')).toBe('some text')
})