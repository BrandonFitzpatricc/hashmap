import { HashMap } from "../scripts/hashmap.js";

const initializeEntries = (map, numEntries) => {
  for (let i = 1; i <= numEntries; i++) {
    map.setEntry(`key${i}`, `value${i}`);
  }
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
  initializeEntries(map, 10);
  expect(map.getValue("key1")).toBe("value1");
});

test("value5 is successfully retrieved from a populated hashmap", () => {
  const map = new HashMap();
  initializeEntries(map, 10);
  expect(map.getValue("key5")).toBe("value5");
});

test("key7 is successfully found from a populated hashmap", () => {
  const map = new HashMap();
  initializeEntries(map, 10);
  expect(map.hasKey("key7")).toBe(true);
});

test("hasKey returns false if the key is not found", () => {
  const map = new HashMap();
  initializeEntries(map, 10);
  expect(map.hasKey("key11")).toBe(false);
});

test("entry 2 is successfully removed from a populated hashmap", () => {
  const map = new HashMap();
  initializeEntries(map, 3);
  map.removeEntry("key2");
  expect(map.entries()).toEqual([
    ["key1", "value1"],
    ["key3", "value3"],
  ]);
});

test("length is successfully returned for a populated hashmap", () => {
  const map = new HashMap();
  initializeEntries(map, 10);
  expect(map.length()).toBe(10);
});

test("length is 0 for an empty hashmap", () => {
  expect(new HashMap().length()).toBe(0);
});

test("clear successfully clears a populated hashmap", () => {
  const map = new HashMap();
  initializeEntries(map, 10);
  map.clear();
  expect(map.length()).toBe(0);
  expect(map.entries()).toEqual([]);
});
