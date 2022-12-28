# 1.2 Analyzing Algorithms

_Analyzing_ an algorithm means predicting the resources that the algorithm requires. Even though resources such as memory, communication bandwidth or energy consumption can be considered, we usually focus on the computational time an algorithm takes to finish.

While analyzing algorithms, we are going to use a generic one-processor, _random-access machine(RAM)_ model of computation. In the RAM model instructions execute sequentially (no concurrency) and each instruction and data access takes a constant amount of time (including array indexing).

## 1.2.1 RAM Model

The RAM model contains instructions that are commonly found in real computers: arithmetic (such as add, subtract, multiply, divide, remainder, floor, ceiling), data movement (load, storei copy), and character. It does not have complex (or unrealistic) instructions such as a sort instruction that completes in one step. Exponentiation is considered a constant-time operation. It assumes equal word sizes, and does not account for memory hierarchy and caches.

RAM models are usually excellent predictors of performance on actual machines.

The notion for _input size_ can vary from problem to problem. For instance, for a sorting algorithm the measure can be the number of items in the input, while it can be the number of bits needed to represent the input for multiplying two integers.

The _running time_  of an algorithm on a particular input is the number of instructions and data accesses executed. We seperate the process of calling a subroutine from the process of executing the subroutine. Calling a subroutine takes a constant time.

## 1.2.2 Order of Growth

In the examination of algorithms, it is the _rate of growth_, or _order of growth_, of the running time that really interests us.

While calculating the running time of an algorithm, represent the statement costs by constants that depend on the actual statement costs. For example, an algorithm might have a running time of $an^2 + bn + c$ where a, b and c are constants that depend on the statement costs. As the size of the input grows, the most significant term $n^2$ dominates the other terms and constants. Thus, we say the algorithms is has a worst-case running time of $\Theta(n2)$.
