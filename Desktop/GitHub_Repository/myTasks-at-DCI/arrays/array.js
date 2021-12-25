const testArray =
{   name : "Julia",
liste : [
    {
        size: 50
    },
        {
        size: 120
    }
],
    name: "Hans"
    
}


testArray[0].liste.forEach((eintrag, i) =>
{
    console.log(eintrag.size);
})