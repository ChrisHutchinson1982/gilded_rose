const { Shop, Item } = require("../src/gilded_rose");

describe("add standard item and run updateQuality", () => {
  it("which reduces items sellIn value by 1 and no change to quality when 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
  it("which reduces items sellIn and Quality values by 1 when quality greater than 0", () => {
    const gildedRose = new Shop([new Item("foo", 1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(1);
  });
  it("which reduces items sellIn and Quality values by 1 when sellIn greater than 0", () => {
    const gildedRose = new Shop([new Item("foo", 1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(1);
  });
  it("which reduces items sellIn by 1 and Quality by 2 when sellIn is less than 0", () => {
    const gildedRose = new Shop([new Item("foo", -1, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(2);
  });
  it("which reduces items sellIn by 1 and Quality by 2 when sellIn is  0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(2);
  });
});
