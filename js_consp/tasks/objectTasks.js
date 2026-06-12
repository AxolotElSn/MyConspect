'use strict';

// Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(obj) {
    const {exp} = obj.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

// Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// "Язык js изучен на 20% Язык php изучен на 10%"

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showProgrammingLangs(obj) {
    let str = '';
    const {programmingLangs} = obj.skills;

    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]} \n`
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

//  Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        const {age} = obj;
        const {languages} = obj.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

