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
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        this.updateQualityValue(item);
        item.sellIn -= 1;
      }
    }

    return this.items;
  }

  updateQualityValue(item) {
    if (item.name === "Aged Brie") {
      this.updateAgedBrieQuality(item);
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      this.updateBackStageQuality(item);
    } else {
      this.updateStandardQuality(item);
    }
  }

  updateStandardQuality(item) {
    if (item.quality > 0) {
      this.runQualityRules(item, -1, -2);
      this.defaultToMinValue(item);
    }
  }

  updateAgedBrieQuality(item) {
    if (item.quality < 50) {
      this.runQualityRules(item, 1, 2);
      this.defaultToMaxValue(item);
    }
  }

  updateBackStageQuality(item) {
    if (item.sellIn > 10) {
      item.quality += 1;
    } else if (item.sellIn > 5) {
      item.quality += 2;
    } else if (item.sellIn > 0) {
      item.quality += 3;
    } else {
      item.quality = 0;
    }
    this.defaultToMaxValue(item);
  }

  runQualityRules(item, degradeValueInDate, degradeValueOutDate) {
    if (item.sellIn > 0) {
      item.quality += degradeValueInDate;
    } else {
      item.quality += degradeValueOutDate;
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
