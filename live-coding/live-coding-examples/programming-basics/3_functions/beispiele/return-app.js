
// getApplicationState = (currentState) => currentState === 30 ? true : false;
function getApplicationState(currentState)
{
    if(currentState === 30)
    {
        return true;
    }
    
    return false;
}

const state = getApplicationState(30);

if(state === true)
{
    console.log("system running");
}
else
{
    console.log("system offline");
}
