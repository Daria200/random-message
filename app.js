const messageDB = {
day : ['moon', 'sun', 'earth', 'wind', 'air'],
output: ['a very good day', 'good day', 'ok day', 'bad day', 'This day could be better'],
advice: ['The weather is beautiful, maybe you should go for a walk', 'Did you sleep enough, maybe you need to take a nap', 'It seems you are hungry, go eat a snack', 'When did you go running last time? It seems today is the perfect day to start', 'You have done a lot today, take a nap']
};

let randomNum =() => {
    return Math.floor(Math.random() * 5)
};

let message = [];

let makeMessage=()=>{
    for (let sentense in messageDB){
        let index= randomNum();
            if (sentense=== 'day'){
                message.push('Today is a day of '+messageDB['day'][index])
            }
            else if(sentense=== 'output'){
                message.push('It is a '+messageDB['output'][index])
            }
            else {
                message.push('A tip for today is :'+messageDB['advice'][index])
            }
    }
};

makeMessage()
console.log(message)