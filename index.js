// code your solution here
function saturdayFun(newActivity = "roller-skate") {
    return `This Saturday, I want to ${newActivity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };


function wrapAdjective(flair = "special") {
    return function(adjective = "*") {
        return `You are ${flair}${adjective}${flair}!`;
};
}

const encouragingPromptFunction = wrapAdjective("*");
console.log(encouragingPromptFunction("amazing")); 