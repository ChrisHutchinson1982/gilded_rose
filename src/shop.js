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
    if (item.name === "Aged Brie") {
      this.#runQualityRules(item, 1, 1, 1, 2);
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      this.#runQualityRules(item, 1, 2, 3, item.quality * -1);
    } else if (item.name === "Conjured Mana Cake") {
      this.#runQualityRules(item, -2, -2, -2, -4);
    } else {
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
