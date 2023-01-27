const Item = require("../src/item");

describe("creates a item object", () => {
  it("when name is foo and sellIn and Quality are 0", () => {
    const item = new Item("foo", 0, 0);
    expect(item.name).toBe("foo");
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(0);
  });
});
