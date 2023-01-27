class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        this.#updateQualityValue(item);
        item.sellIn -= 1;
      }
    });

    return this.items;
  }

  #updateQualityValue(item) {
    // run specific rules
    if (item.name === "Aged Brie") {
      // for Aged Brie i.e.
      // + 1 quality when sellIn greater than 10, 5 and 0
      // + 2 quality when sellIn 0 or less
      this.#runQualityRules(item, 1, 1, 1, 2);
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      // for Backstage passes i.e.
      // + 1 quality when sellIn greater than 10
      // + 2 quality when sellIn greater than 5
      // + 3 quality when sellIn greater than 0
      // reverts quality to 0 when sellIn 0 or less
      this.#runQualityRules(item, 1, 2, 3, item.quality * -1);
    } else if (item.name === "Conjured Mana Cake") {
      // for Conjured Mana Cake i.e.
      // - 2 quality when sellIn greater than 10, 5 and 0
      // - 4 quality when sellIn 0 or less
      this.#runQualityRules(item, -2, -2, -2, -4);
    } else {
      // for normal items i.e.
      // - 1 quality when sellIn greater than 10, 5 and 0
      // - 2 quality when sellIn 0 or less
      this.#runQualityRules(item, -1, -1, -1, -2);
    }
  }

  #runQualityRules(
    item,
    plusTenDayDegrade,
    plusFiveDayDegrade,
    plusZeroDayDegrade,
    zeroOrLessDayDegrade
  ) {
    if (item.sellIn > 10) {
      item.quality += plusTenDayDegrade;
    } else if (item.sellIn > 5) {
      item.quality += plusFiveDayDegrade;
    } else if (item.sellIn > 0) {
      item.quality += plusZeroDayDegrade;
    } else {
      item.quality += zeroOrLessDayDegrade;
    }
    this.defaultToMinMaxValues(item);
  }

  defaultToMinMaxValues(item) {
    if (item.quality > 50) {
      item.quality = 50;
    } else if (item.quality < 0) {
      item.quality = 0;
    }
  }
}

module.exports = Shop;
