import { HashMap } from "../scripts/hashmap.js";

const initializeEntries = (map) => {
  map.setEntry("key1", "value1");
  map.setEntry("key2", "value2");
  map.setEntry("key3", "value3");
  map.setEntry("key4", "value4");
  map.setEntry("key5", "value5");
  map.setEntry("key6", "value6");
  map.setEntry("key7", "value7");
  map.setEntry("key8", "value8");
  map.setEntry("key9", "value9");
  map.setEntry("key10", "value10");
};

test("entries are successfully added to a hashmap", () => {
  const map = new HashMap();
  map.setEntry("key1", "value1");
  map.setEntry("key2", "value2");
  map.setEntry("key3", "value3");
  expect(map.entries()).toEqual([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
  ]);
});

test("value1 is successfully retrieved from a populated hashmap", () => {
  const map = new HashMap();
  initializeEntries(map);
  expect(map.getValue("key1")).toBe("value1");
});

test("value5 is successfully retrieved from a populated hashmap", () => {
  const map = new HashMap();
  initializeEntries(map);
  expect(map.getValue("key5")).toBe("value5");
});

test("key7 is successfully found from a populated hashmap", () => {
  const map = new HashMap();
  initializeEntries(map);
  expect(map.hasKey("key7")).toBe(true);
});

test("hasKey returns false if the key is not found", () => {
  const map = new HashMap();
  initializeEntries(map);
  expect(map.hasKey("key11")).toBe(false);
});
