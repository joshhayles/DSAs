// # https://www.youtube.com/watch?v=OSacNEZmkfY

// invited n friends
// numbered his friends with integers: 1 - n
// a friend number i gave a gift to a friend number p[i]
// each friend received one gift

// for each friend i, what's the number of a friend who has given him a gift

// INPUT
// first line is an integer representing the number of friends invited to the party:

//   4

// second line contains n integers (which will match the number of friends invited)
//   4
//   2 3 4 1

// the i-th number is p[i] - which is the number of a friend who gave a gift to friend number i
// some friends may have given gifts to themselves (selfish bastards)

// OUTPUT
// print n integers: the i-th number should equal the number of the friend who gave a gift to friend number i

// friend 1 gave a present to friend 2
// friend 2 gave a present to friend 3
// friend 3 gave a present to friend 4
// friend 4 gave a present to friend 1