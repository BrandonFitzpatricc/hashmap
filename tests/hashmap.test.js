import { HashMap } from "../scripts/hashmap.js";

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
  map.setEntry("key1", "value1");
  map.setEntry("key2", "value2");
  map.setEntry("key3", "value3");
  expect(map.getValue("key1")).toBe("value1");
});

test("value2 is successfully retrieved from a populated hashmap", () => {
  const map = new HashMap();
  map.setEntry("key1", "value1");
  map.setEntry("key2", "value2");
  map.setEntry("key3", "value3");
  expect(map.getValue("key2")).toBe("value2");
});
