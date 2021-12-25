
// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.

const friends = [ "rika", "maria", "christy", "linda", "oliver", "itamar" ];

function filterFriends(inputArray, key)
{
    // return inputArray.filter(friend => friend.includes(key));

    const ergebnis = inputArray.filter(function(element)
    {
        return element.includes(key);
    });

    return ergebnis;
}

console.log(filterFriends(friends, "ty"));
