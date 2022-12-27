# 1.2 Loop Invariants

A loop invariant is a property of a loop that stays true before and after each iteration.

Loop invariants help us why an algorithm is correct. We need to show three properties of a loop invariant: 

__Initialization:__ It is true prior to the first iteration of the loop.

__Maintenance:__ It is true before an iteration of the loop and remains true before the next iteration.

__Termination:__ The loop terminates. When it terminates, the invariant -along with the reason the loop terminated- gives us a useful property that helps us show the algorithm is correct.

A loop-invariant proof for correctness is a form of mathematical induction. Showing that the invariant holds before the first iteration corresponds to the base case, and showing that it holds from iteration to iteration corresponds to the inductive step.