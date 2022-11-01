# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
- I created a new generalised function `createDigestHash` with three arguments i.e data, algorithm and encodingType; which will work for all algorithms and encoding types.

- I changed the position of the constants TRIVIAL_PARTITION_KEY and MAX_PARTITION_KEY_LENGTH as they are not part of the function logic.

- To remove nested if-else, I used || operator to assign the value of partitionKey. This will not break the functionality and will also improve code readability.

- After understanding the logic, I realised that one if-else can be removed by assigning the partitionKey with default value TRIVIAL_PARTITION_KEY.

- Multiple if-else statements in a function reduces the code readability so I removed multiple if-else statements without affecting the functionality.
