const crypto = require("crypto");

const createDigestHash = ({ data, algorithm = 'sha3-512', encodingType = 'hex' }) => {
  return crypto.createHash(algorithm).update(data).digest(encodingType)
}

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {  
  let partitionKey = TRIVIAL_PARTITION_KEY;

  if (event) {
    partitionKey = event.partitionKey || createDigestHash({ data: JSON.stringify(event) }); 
    
    if (typeof partitionKey !== "string") {
      partitionKey = JSON.stringify(partitionKey);
    }
  } 
  
  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = createDigestHash({ data: partitionKey });
  }

  return partitionKey;
};

exports.createDigestHash = createDigestHash;
