class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        this.updateQualityValue(item);
        item.sellIn -= 1;
      }
    });

    return this.items;
  }

  updateQualityValue(item) {
    if (item.name === "Aged Brie") {
      this.updateAgedBrieQuality(item);
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      this.updateBackStageQuality(item);
    } else if (item.name === "Conjured Mana Cake") {
      this.updateConjuredQuality(item);
    } else {
      this.updateNormalQuality(item);
    }
  }

  updateNormalQuality(item) {
    if (item.quality > 0) {
      this.runQualityRules(item, -1, -1, -1, -2);
      this.defaultToMinValue(item);
    }
  }

  updateAgedBrieQuality(item) {
    if (item.quality < 50) {
      this.runQualityRules(item, 1, 1, 1, 2);
      this.defaultToMaxValue(item);
    }
  }

  updateBackStageQuality(item) {
    this.runQualityRules(item, 1, 2, 3, item.quality * -1);
    this.defaultToMaxValue(item);
  }

  updateConjuredQuality(item) {
    this.runQualityRules(item, -2, -2, -2, -1);
    this.defaultToMinValue(item);
  }

  runQualityRules(
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
  }

  defaultToMaxValue(item) {
    if (item.quality > 50) {
      item.quality = 50;
    }
  }

  defaultToMinValue(item) {
    if (item.quality < 0) {
      item.quality = 0;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
