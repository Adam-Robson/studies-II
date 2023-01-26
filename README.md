
# Study

Do two of the challenges at least.

## Convenience Store

Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

Notes
coin quarter dime nickel penny
amount 25 cents 10 cents 5 cents 1 cent
decimal $0.25 $0.10 $0.05 $0.01

Function Interface
function changeEnough(coins, amount) {
You can assume valid input

Test Cases

Input [2, 100, 0, 0] [0, 0, 20, 5] [30, 40, 20, 5] [10, 0, 0, 50] [1, 0, 5, 219]
Output 14.11 false 0.75 true 12.55 true 3.85 false 19.99 false

## Jewels and Stones

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Function Interface
function countJewels(jewels, stones) {
1 <= jewels.length
stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
You can assume valid input

Test Cases
Input Output
jewels = "aA", stones = "aAAbbbb" 3
jewels = "z", stones = "ZZ" 0
