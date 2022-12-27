# 1.2 Analyzing Algorithms

_Analyzing_ an algorithm means predicting the resources that the algorithm requires. Even though resources such as memory, communication bandwidth or energy consumption can be considered, we usually focus on the computational time an algorithm takes to finish.

While analyzing the algorithms, we are going to use a generic one-processor, _random-access machine(RAM)_ model of computation. In the RAM model instructions execute sequentially (no concurrency) and each instruction and data access takes a constant amount of time (including array indexing).

The RAM model contains instructions that are commonly found in real computers: arithmetic (such as add, subtract, multiply, divide, remainder, floor, ceiling), data movement (load, storei copy), and character. It does not have complex (or unrealistic) instructions such as a sort instruction that completes in one step. Exponentiation is considered a constant-time operation. It assumes equal word sizes, and does not account for memory hierarchy and caches.

RAM models are usually excellent predictors of performance on actual machines.