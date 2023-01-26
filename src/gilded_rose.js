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

      //   if (
      //     this.items[i].name != "Aged Brie" &&
      //     this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      //   ) {
      //     if (this.items[i].quality > 0) {
      //       if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
      //         this.items[i].quality = this.items[i].quality - 1;
      //       }
      //     }
      //   } else {
      //     if (this.items[i].quality < 50) {
      //       this.items[i].quality = this.items[i].quality + 1;
      //       if (
      //         this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
      //       ) {
      //         if (this.items[i].sellIn < 11) {
      //           if (this.items[i].quality < 50) {
      //             this.items[i].quality = this.items[i].quality + 1;
      //           }
      //         }
      //         if (this.items[i].sellIn < 6) {
      //           if (this.items[i].quality < 50) {
      //             this.items[i].quality = this.items[i].quality + 1;
      //           }
      //         }
      //       }
      //     }
      //   }
      //   if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
      //     this.items[i].sellIn = this.items[i].sellIn - 1;
      //   }
      //   if (this.items[i].sellIn < 0) {
      //     if (this.items[i].name != "Aged Brie") {
      //       if (
      //         this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      //       ) {
      //         if (this.items[i].quality > 0) {
      //           if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
      //             this.items[i].quality = this.items[i].quality - 1;
      //           }
      //         }
      //       } else {
      //         this.items[i].quality =
      //           this.items[i].quality - this.items[i].quality;
      //       }
      //     } else {
      //       if (this.items[i].quality < 50) {
      //         this.items[i].quality = this.items[i].quality + 1;
      //       }
      //     }
      //   }
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

  updateAgedBrieQuality(item) {
    if (item.quality < 50) {
      this.runQualityRules(item, 1, 2, 49);
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
  }

  updateStandardQuality(item) {
    if (item.quality > 0) {
      this.runQualityRules(item, -1, -2, 1);
    }
  }

  runQualityRules(item, degradeValueInDate, degradeValueOutDate, qualityLimit) {
    if (item.sellIn > 0 || item.quality === qualityLimit) {
      item.quality += degradeValueInDate;
    } else {
      item.quality += degradeValueOutDate;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
