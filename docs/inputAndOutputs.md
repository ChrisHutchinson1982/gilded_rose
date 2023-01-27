## Input and Outputs

**Note:** Item objects summarised below for reference only.

Standard item when updateQuality run once

| Input             | Output            |
| ----------------- | ----------------- |
| [{"foo", 0, 0}]   | [{"foo", -1, 0}]  |
| [{"foo", 1, 2}]   | [{"foo", 0, 1}]   |
| [{"foo", 2, 3}]   | [{"foo", 1, 3}]   |
| [{"foo", -1, 4}]  | [{"foo", 0, 2}]   |
| [{"foo", 0, 4}]   | [{"foo", -1, 2}]  |
| [{"foo", -1, 1}]  | [{"foo", -2, 0}]  |
| [{"foo", -1, -1}] | [{"foo", -2, -1}] |
| [{"foo", 1, -1}]  | [{"foo", 0, -1}]  |

Aged Brie item when updateQuality run once

| Input                   | Output                  |
| ----------------------- | ----------------------- |
| [{"Aged Brie", 1, 0}]   | [{"Aged Brie", 0, 1}]   |
| [{"Aged Brie", 0, 0}]   | [{"Aged Brie", -1, 2}]  |
| [{"Aged Brie", -1, 0}]  | [{"Aged Brie", -2, 2}]  |
| [{"Aged Brie", 0, 50}]  | [{"Aged Brie", -1, 50}] |
| [{"Aged Brie", -1, 50}] | [{"Aged Brie", -2, 50}] |
| [{"Aged Brie", 1, 50}]  | [{"Aged Brie", 0, 50}]  |
| [{"Aged Brie", 0, 49}]  | [{"Aged Brie", -1, 50}] |
| [{"Aged Brie", -1, 49}] | [{"Aged Brie", -2, 50}] |
| [{"Aged Brie", 1, 49}]  | [{"Aged Brie", 0, 50}]  |
| [{"Aged Brie", 1, -1}]  | [{"Aged Brie", 0, 0}]   |
| [{"Aged Brie", 0, -1}]  | [{"Aged Brie", -1, 1}]  |
| [{"Aged Brie", -1, -1}] | [{"Aged Brie", -2, 1}]  |

Sulfuras, Hand of Ragnaros item when updateQuality run once

| Input                                     | Output                                    |
| ----------------------------------------- | ----------------------------------------- |
| [{"Sulfuras, Hand of Ragnaros", 1, 10}]   | [{"Sulfuras, Hand of Ragnaros", 1, 10}]   |
| [{"Sulfuras, Hand of Ragnaros", 0, 10}]   | [{"Sulfuras, Hand of Ragnaros", 0, 10}]   |
| [{"Sulfuras, Hand of Ragnaros", -1, 10}]  | [{"Sulfuras, Hand of Ragnaros", -1, 10}]  |
| [{"Sulfuras, Hand of Ragnaros", -1, 60}]  | [{"Sulfuras, Hand of Ragnaros", -1, 60}]  |
| [{"Sulfuras, Hand of Ragnaros", -1, -60}] | [{"Sulfuras, Hand of Ragnaros", -1, -60}] |

Backstage passes to a TAFKAL80ETC concert item when updateQuality run once

- “Backstage passes”, like aged brie, increases in Quality as it’s `SellIn` value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

| Input                                                   | Output                                                  |
| ------------------------------------------------------- | ------------------------------------------------------- |
| [{"Backstage passes to a TAFKAL80ETC concert", 0, 0}]   | [{"Backstage passes to a TAFKAL80ETC concert", -1, 0}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", 12, 0}]  | [{"Backstage passes to a TAFKAL80ETC concert", 11, 1}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", 11, 0}]  | [{"Backstage passes to a TAFKAL80ETC concert", 10, 1}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", 10, 0}]  | [{"Backstage passes to a TAFKAL80ETC concert", 9, 2}]   |
| [{"Backstage passes to a TAFKAL80ETC concert", 6, 0}]   | [{"Backstage passes to a TAFKAL80ETC concert", 5, 2}]   |
| [{"Backstage passes to a TAFKAL80ETC concert", 5, 0}]   | [{"Backstage passes to a TAFKAL80ETC concert", 4, 3}]   |
| [{"Backstage passes to a TAFKAL80ETC concert", 1, 0}]   | [{"Backstage passes to a TAFKAL80ETC concert", 0, 3}]   |
| [{"Backstage passes to a TAFKAL80ETC concert", 0, 10}]  | [{"Backstage passes to a TAFKAL80ETC concert", -1, 0}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", -1, 10}] | [{"Backstage passes to a TAFKAL80ETC concert", -2, 0}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", -1, -1}] | [{"Backstage passes to a TAFKAL80ETC concert", -2, 0}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", 11, -2}] | [{"Backstage passes to a TAFKAL80ETC concert", 10, -1}] |
| [{"Backstage passes to a TAFKAL80ETC concert", 6, -3}]  | [{"Backstage passes to a TAFKAL80ETC concert", 5, -1}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", 1, -4}]  | [{"Backstage passes to a TAFKAL80ETC concert", 0, -1}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", 11, 50}] | [{"Backstage passes to a TAFKAL80ETC concert", 10, 50}] |
| [{"Backstage passes to a TAFKAL80ETC concert", 6, 50}]  | [{"Backstage passes to a TAFKAL80ETC concert", 5, 50}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", 1, 50}]  | [{"Backstage passes to a TAFKAL80ETC concert", 0, 50}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", 6, 49}]  | [{"Backstage passes to a TAFKAL80ETC concert", 5, 50}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", 1, 49}]  | [{"Backstage passes to a TAFKAL80ETC concert", 0, 50}]  |
| [{"Backstage passes to a TAFKAL80ETC concert", 1, 48}]  | [{"Backstage passes to a TAFKAL80ETC concert", 0, 50}]  |

Mutiple items when updateQuality run once

| Input                                                     | Output                                                                                        |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [{"foo", 0, 0}, {"something", 1, 2}]                      | [{"foo", -1, 0}, {"something", 0, 1}]                                                         |
| [{"foo", 0, 0}, {"something", 1, 2}, {"Aged Brie", 1, 0}] | [{"foo", -1, 0}, {"something", 0, 1}, {"Aged Brie", 0, 1}]                                    |
| [{"foo", 0, 0}, {"Sulfuras, Hand of Ragnaros", 1, 10}]    | [{"foo", -1, 0}, {"Sulfuras, Hand of Ragnaros", 1, 10}]                                       |
| [{"Backstage passes to a TAFKAL80ETC concert", 0, 0}]     | [{"Sulfuras, Hand of Ragnaros", 1, 10}, {"Backstage passes to a TAFKAL80ETC concert", -1, 0}] |

When updateQuality run twice

| Input                                                  | Output                                                |
| ------------------------------------------------------ | ----------------------------------------------------- |
| [{"foo", 1, 2}]                                        | [{"foo", -1, 0}]                                      |
| [{"Aged Brie", 0, 0}]                                  | [{"Aged Brie", -2, 4}]                                |
| [{"Sulfuras, Hand of Ragnaros", 1, 10}]                | [{"Sulfuras, Hand of Ragnaros", 1, 10}]               |
| [{"Backstage passes to a TAFKAL80ETC concert", 11, 0}] | [{"Backstage passes to a TAFKAL80ETC concert", 9, 3}] |
