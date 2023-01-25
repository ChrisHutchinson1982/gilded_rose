const { Shop, Item } = require("../src/gilded_rose");

describe("add standard item and run updateQuality", () => {
  it("reduces items sellIn value by 1 and no change to quality when 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
  it("reduces items sellIn and Quality values by 1 when quality greater than 0", () => {
    const gildedRose = new Shop([new Item("foo", 1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(1);
  });
  it("reduces items sellIn and Quality values by 1 when sellIn greater than 0", () => {
    const gildedRose = new Shop([new Item("foo", 1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(1);
  });
  it("reduces items sellIn by 1 and Quality by 2 when sellIn is less than 0", () => {
    const gildedRose = new Shop([new Item("foo", -1, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(2);
  });
  it("reduces items sellIn by 1 and Quality by 2 when sellIn is 0", () => {
    const gildedRose = new Shop([new Item("foo", 0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(2);
  });
  it("reduces items sellIn by 1 and fixes Quality to 0", () => {
    const gildedRose = new Shop([new Item("foo", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });
  it("reduces items sellIn by 1 and no change to Quality when quality is less than )", () => {
    const gildedRose = new Shop([new Item("foo", -1, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(-1);
  });
});

describe("add Aged Brie item and run updateQuality", () => {
  it("reduces items sellIn by 1 and increases quality by 1 when sellIn greater than 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(1);
  });
  it("reduces items sellIn by 1 and increases quality by 2 when sellIn is 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(2);
  });
  it("reduces items sellIn by 1 and increases quality by 2 when sellIn is less than 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(2);
  });
  it("reduces items sellIn by 1 and does not change quality when 50 and sellIn is 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and does not change quality when 50 and sellIn is less than 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and does not change quality when 50 and sellIn is greater than 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and fixes quality at 50 when quality is 49 and sellIn is 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and fixes quality at 50 when quality is 49 and sellIn is less than 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and fixes quality at 50 when quality is 49 and sellIn is greater than 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and increases quality by 1 when sellIn is greater than 0 and quality less than 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 1, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });
  it("reduces items sellIn by 1 and increases quality by 2 when sellIn is 0 and quality less than 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(1);
  });
  it("reduces items sellIn by 1 and increases quality by 2 when sellIn is less than 0 and quality less than 0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(1);
  });
});
describe("add Sulfuras, Hand of Ragnaros item and run updateQuality", () => {
  it("no change when sellIn greater than 0", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 1, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(10);
  });
  it("no change when sellIn is 0", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(10);
  });
  it("no change when sellIn is less than 0", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", -1, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(10);
  });
  it("no change when quality is greater than 50", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", -1, 60),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(60);
  });
  it("no change when quality is less than 50", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", -1, -60),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(-60);
  });
});
