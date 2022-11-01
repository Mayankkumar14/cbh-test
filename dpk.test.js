const { deterministicPartitionKey, createDigestHash } = require("./dpk");
describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it ("It should return hash string for any input", () => {
    const trivialKeyArray = deterministicPartitionKey([{ name: 'test' }]);
    expect(typeof trivialKeyArray).toBe("string");

    const trivialKeyObject = deterministicPartitionKey({ name: 'test' });
    expect(typeof trivialKeyObject).toBe("string");

    const trivialKeyBoolean = deterministicPartitionKey(true);
    expect(typeof trivialKeyBoolean).toBe("string");

    const trivialKeyNumber = deterministicPartitionKey(6);
    expect(typeof trivialKeyNumber).toBe("string");
  })

  it ('For any string input of length < MAX_PARTITION_KEY_LENGTH (256) it will return the input', () => {
    const trivialKeyBoolean = deterministicPartitionKey({ partitionKey: '12345' });
    expect(trivialKeyBoolean).toBe("12345");
  })
});

describe("createDigestHash", () => {
  it("It should return proper encoded sequence for sha3-512 algorithm", () => {
    const hash = createDigestHash({ data: 'test data' });
    expect(hash.length).toBe(128);
  });

  it("It should return proper encoded sequence for sha3-256 algorithm", () => {
    const hash = createDigestHash({ data: 'test data -2', algorithm: 'sha3-256' });
    expect(hash.length).toBe(64);
  });
});