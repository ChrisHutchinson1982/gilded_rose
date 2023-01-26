const { Shop, Item } = require("../src/gilded_rose");

describe("updateQuality returns empty array", () => {
  it("when no items added", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items).toEqual([]);
  });
});

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
    const gildedRose = new Shop([new Item("foo", 2, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(2);
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
  it("reduces items sellIn by 1 and fixes Quality to 0 when sellIn is less", () => {
    const gildedRose = new Shop([new Item("foo", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });
  it("reduces items sellIn by 1 when -1 and no change to Quality when quality is less than 0", () => {
    const gildedRose = new Shop([new Item("foo", -1, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(-1);
  });
  it("reduces items sellIn by 1 when 1 and no change to Quality when quality is less than 0", () => {
    const gildedRose = new Shop([new Item("foo", 1, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(0);
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
  it("no change when quality is less than 0", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", -1, -60),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(-60);
  });
});

describe("add Backstage passes to a TAFKAL80ETC concert item and run updateQuality", () => {
  it("reduces items sellIn value by 1 and no change to quality when 0 and sellIn value is 0", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
  it("reduces items sellIn value by 1 and increases quality by 1 when sellIn value greater than 10", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 12, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(11);
    expect(items[0].quality).toBe(1);
  });
  it("reduces items sellIn value by 1 and increases quality by 1 when sellIn is 11", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(1);
  });
  it("reduces items sellIn value by 1 and increases quality by 2 when sellIn is 10", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(2);
  });
  it("reduces items sellIn value by 1 and increases quality by 2 when sellIn is 6", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(2);
  });
  it("reduces items sellIn value by 1 and increases quality by 3 when sellIn is 5", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(3);
  });
  it("reduces items sellIn value by 1 and increases quality by 3 when sellIn is 1", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(3);
  });
  it("reduces items sellIn value by 1 and changes quality to 0 when sellIn is 0", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
  it("reduces items sellIn value by 1 and changes quality to 0 when sellIn is -1", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });
  it("reduces items sellIn value by 1 and changes quality to 0 when sellIn is -1 and quality is -1", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, -1),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });
  it("reduces items sellIn value by 1 and increases quality by 1 when negative and sellIn value greater than 10", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, -2),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(-1);
  });
  it("reduces items sellIn value by 1 and increases quality by 2 when negative and sellIn is 6", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, -3),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(-1);
  });
  it("reduces items sellIn value by 1 and increases quality by 3 when negative and sellIn is 1", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, -4),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(-1);
  });
  it("reduces items sellIn by 1 and does not change quality when 50 and sellIn is 11", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and does not change quality when 50 and sellIn is 6", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and does not change quality when 50 and sellIn is 1", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and fixes quality at 50 and sellIn is 6", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and fixes quality at 50 when 49 and sellIn is 1", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });
  it("reduces items sellIn by 1 and fixes quality at 50 when 48 and sellIn is 1", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 1, 48),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });
});

describe("add mutilple items and run updateQuality", () => {
  it("when two standard items", () => {
    const gildedRose = new Shop([
      new Item("foo", 0, 0),
      new Item("something", 1, 2),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
    expect(items[1].name).toBe("something");
    expect(items[1].sellIn).toBe(0);
    expect(items[1].quality).toBe(1);
  });
  it("when two standard items and one Aged Brie item", () => {
    const gildedRose = new Shop([
      new Item("foo", 0, 0),
      new Item("something", 1, 2),
      new Item("Aged Brie", 1, 0),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
    expect(items[1].name).toBe("something");
    expect(items[1].sellIn).toBe(0);
    expect(items[1].quality).toBe(1);
    expect(items[2].name).toBe("Aged Brie");
    expect(items[2].sellIn).toBe(0);
    expect(items[2].quality).toBe(1);
  });
  it("when one standard item and one Sulfuras, Hand of Ragnaros item", () => {
    const gildedRose = new Shop([
      new Item("foo", 0, 0),
      new Item("Sulfuras, Hand of Ragnaros", 1, 10),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
    expect(items[1].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[1].sellIn).toBe(1);
    expect(items[1].quality).toBe(10);
  });
  it("when one Sulfuras, Hand of Ragnaros and one TAFKAL80ETC concert item item", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 1, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(10);
    expect(items[1].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[1].sellIn).toBe(-1);
    expect(items[1].quality).toBe(0);
  });
});

describe("add items and run updateQuality twice", () => {
  it("for standard item", () => {
    const gildedRose = new Shop([new Item("foo", 1, 2)]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
  it("for Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(4);
  });
  it("for Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 1, 10),
    ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(10);
  });
  it("for Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0),
    ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(3);
  });
});
