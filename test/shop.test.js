const Shop = require("../src/shop");

describe("updateQuality returns empty array", () => {
  it("when no items added", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items).toEqual([]);
  });
});

describe("add mutilple items and run updateQuality", () => {
  it("when three standard items", () => {
    const itemOneDouble = {
      name: "foo",
      sellIn: 0,
      quality: 0,
    };

    const itemTwoDouble = {
      name: "something",
      sellIn: 1,
      quality: 2,
    };

    const itemThreeDouble = {
      name: "other",
      sellIn: -1,
      quality: 2,
    };

    const gildedRose = new Shop([
      itemOneDouble,
      itemTwoDouble,
      itemThreeDouble,
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
    expect(items[1].name).toBe("something");
    expect(items[1].sellIn).toBe(0);
    expect(items[1].quality).toBe(1);
    expect(items[2].name).toBe("other");
    expect(items[2].sellIn).toBe(-2);
    expect(items[2].quality).toBe(0);
  });
  it("when three Aged Brie items", () => {
    const itemOneDouble = {
      name: "Aged Brie",
      sellIn: 2,
      quality: 1,
    };

    const itemTwoDouble = {
      name: "Aged Brie",
      sellIn: -1,
      quality: 1,
    };

    const itemThreeDouble = {
      name: "Aged Brie",
      sellIn: -1,
      quality: 49,
    };

    const gildedRose = new Shop([
      itemOneDouble,
      itemTwoDouble,
      itemThreeDouble,
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(2);
    expect(items[1].name).toBe("Aged Brie");
    expect(items[1].sellIn).toBe(-2);
    expect(items[1].quality).toBe(3);
    expect(items[2].name).toBe("Aged Brie");
    expect(items[2].sellIn).toBe(-2);
    expect(items[2].quality).toBe(50);
  });
  it("when one standard item and one Sulfuras, Hand of Ragnaros item", () => {
    const itemOneDouble = {
      name: "foo",
      sellIn: 0,
      quality: 0,
    };

    const itemTwoDouble = {
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 1,
      quality: 10,
    };

    const gildedRose = new Shop([itemOneDouble, itemTwoDouble]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
    expect(items[1].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[1].sellIn).toBe(1);
    expect(items[1].quality).toBe(10);
  });
  it("when five TAFKAL80ETC concert items added", () => {
    const itemOneDouble = {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 11,
      quality: 2,
    };

    const itemTwoDouble = {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 6,
      quality: 3,
    };

    const itemThreeDouble = {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 1,
      quality: 3,
    };

    const itemFourDouble = {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 0,
      quality: 10,
    };

    const itemFiveDouble = {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 2,
      quality: 48,
    };

    const gildedRose = new Shop([
      itemOneDouble,
      itemTwoDouble,
      itemThreeDouble,
      itemFourDouble,
      itemFiveDouble,
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(3);
    expect(items[1].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[1].sellIn).toBe(5);
    expect(items[1].quality).toBe(5);
    expect(items[2].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[2].sellIn).toBe(0);
    expect(items[2].quality).toBe(6);
    expect(items[3].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[3].sellIn).toBe(-1);
    expect(items[3].quality).toBe(0);
    expect(items[4].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[4].sellIn).toBe(1);
    expect(items[4].quality).toBe(50);
  });
});
