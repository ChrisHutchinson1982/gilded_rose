const { Shop, Item } = require("../src/gilded_rose");

describe("adds item and updates sellIn and quality", () => {
  it("when item is foo with 0 sellIn and 0 quality", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
});
