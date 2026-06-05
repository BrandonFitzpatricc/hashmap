import { Bucket } from "../scripts/bucket.js";
import { Entry } from "../scripts/entry.js";

test("{key1, value1} is successfully inserted to an empty bucket", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  expect(bucket.toArray("entry")).toEqual([["key1", "value1"]]);
});

test("multiple values are successfully inserted to an empty bucket", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.toArray("entry")).toEqual([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
  ]);
});

test("if an entry with an existing key in the middle of a populated bucket is inserted into it, then it'll replace the previous entry with that key", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  bucket.insert(new Entry("key2", "new value"));
  expect(bucket.toArray("entry")).toEqual([
    ["key1", "value1"],
    ["key2", "new value"],
    ["key3", "value3"],
  ]);
});

test("if an entry with an existing key at the beginning of a populated bucket is inserted into it, then it'll replace the previous entry with that key", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  bucket.insert(new Entry("key1", "new value"));
  expect(bucket.toArray("entry")).toEqual([
    ["key1", "new value"],
    ["key2", "value2"],
    ["key3", "value3"],
  ]);
});

test("if an entry with an existing key at the end of a populated bucket is inserted into it, then it'll replace the previous entry with that key", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  bucket.insert(new Entry("key3", "new value"));
  expect(bucket.toArray("entry")).toEqual([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "new value"],
  ]);
});

test("size of an empty bucket is 0", () => {
  const bucket = new Bucket();
  expect(bucket.size()).toBe(0);
});

test("size of a populated bucket is returned correctly", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  bucket.insert(new Entry("key4", "value4"));
  bucket.insert(new Entry("key5", "value5"));
  expect(bucket.size()).toBe(5);
});

test("the entry in the first index of a populated bucket is found successfully", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.findValue("key1")).toBe("value1");
});

test("the entry in the middle of a populated bucket is found successfully", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.findValue("key2")).toBe("value2");
});

test("the entry at the end of a populated bucket is found successfully", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.findValue("key3")).toBe("value3");
});

test("findValue will return null if an entry cannot be found", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.findValue("key4")).toBe(null);
});

test("hasKey returns true if key is found at the front of a populated bucket", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.hasKey("key1")).toBe(true);
});

test("hasKey returns true if key is found in the middle of a populated bucket", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.hasKey("key2")).toBe(true);
});

test("hasKey returns true if key is found at the end of a populated bucket", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.hasKey("key3")).toBe(true);
});

test("hasKey returns false if value is not found within the bucket", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.hasKey("key4")).toBe(false);
});

test("hasKey returns false when called on an empty bucket", () => {
  const bucket = new Bucket();
  expect(bucket.hasKey("key")).toBe(false);
});

test("the first entry of a bucket is successfully removed", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  bucket.removeEntry("key1");
  expect(bucket.toArray("entry")).toEqual([
    ["key2", "value2"],
    ["key3", "value3"],
  ]);
});

test("the middle entry of a bucket is successfully removed", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  bucket.removeEntry("key2");
  expect(bucket.toArray("entry")).toEqual([
    ["key1", "value1"],
    ["key3", "value3"],
  ]);
});

test("the last entry of a bucket is successfully removed", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  bucket.removeEntry("key3");
  expect(bucket.toArray("entry")).toEqual([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
});

test("removeEntry returns true if the entry is successfully removed", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.removeEntry("key1")).toBe(true);
});

test("removeEntry returns false if the entry cannot be found", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.removeEntry("key4")).toBe(false);
});

test("removeEntry returns false if called from an empty bucket", () => {
  expect(new Bucket().removeEntry("key")).toBe(false);
});

test("removeAll successfully removes every entry from a populated bucket", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  bucket.removeAll();
  expect(bucket.toArray("entry")).toEqual([]);
});

test("removeAll doesn't break when used on an empty bucket", () => {
  const bucket = new Bucket();
  bucket.removeAll();
  expect(bucket.toArray("entry")).toEqual([]);
});

test("toArray('key') successfully returns an array of keys from a populated bucket", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.toArray("key")).toEqual(["key1", "key2", "key3"]);
});

test("toArray('value') successfully returns an array of values from a populated bucket", () => {
  const bucket = new Bucket();
  bucket.insert(new Entry("key1", "value1"));
  bucket.insert(new Entry("key2", "value2"));
  bucket.insert(new Entry("key3", "value3"));
  expect(bucket.toArray("value")).toEqual(["value1", "value2", "value3"]);
});
