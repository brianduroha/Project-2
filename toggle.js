// set variables 

let btn = document.querySelector('#new-fact');
let quote = document.querySelector('.quote'); 
let planets = document.querySelector('.planet');

const facts =  [{
    quote: `"Venus is the second planet from the Sun, and Earth's closest planetary neighbor. It's the hottest planet in our solar system, and it is sometimes called Earth's twin."`,
    planet: `Venus`
}, {
    quote: `"Earth, our home planet, is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things."`,
    planet: `Earth`
}, {
    quote: `"The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter."`,
    planet: `Mercury`
}, {
    quote: `"Mars, the fourth planet from the Sun, is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather."`,
    planet: `Mars`
}, {
    quote: `"Jupiter is the largest planet in our solar system. If it were a hollow shell, 1,000 Earths could fit inside. It's also the oldest planet, forming from the dust and gases left over from the Sun's formation 4.5 billion years ago."`,
    planet: `Jupiter`
}, {
    quote: `"Saturn is the sixth planet from the Sun, and the second-largest planet in our solar system. Saturn is surrounded by a spectacular ring system, and it has dozens of moons."`,
    planet: `Saturn`
}, {
    quote: `"Uranus is the seventh planet from the Sun, and it has the third largest diameter of planets in our solar system. Uranus appears to spin sideways."`,
    planet: `Uranus`
}, {
    quote: `"Neptune is the eighth and most distant planet in our solar system. Dark, cold, and whipped by supersonic winds, ice giant Neptune is more than 30 times as far from the Sun as Earth."`,
    planet: `Neptune`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * facts.length);

    quote.innerText = facts[random].quote;
    planets.innerText = facts[random].planet;

})