const receivesAFunction = callBackFunction => callBackFunction()

function returnsANamedFunction(){
    let namedFunction = () => console.log("Named Function!!")
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return (function(){console.log("Anonymous")})
}



/*function runFiveMiles(){
    console.log("Go for a five-mile run")
}

function liftWeights(){
    console.log("Pump iron")
}

function swimFortyLaps(){
    console.log("Swim 40 laps")
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}

function Monday(){
    exerciseRoutine(liftWeights)
}*/
