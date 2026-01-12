function generateNickname (name,birthDate,) {
  const abjectives = [
    "ссыкливый", 
    "спокойный",
    "добрый",
    "злой",
    "тупой",
    "слабый",
    "недоразвитый",
    "умный"        
  ]

  const animals = [
    "пес", 
    "жираф",
    "тигр",
    "леф",
    "крот",
    "ворон",
    "слон",
    "змей",      
  ]

  const randomAbjective =  abjectives[Math.floor(Math.random() * abjectives.length)]
  const randomNone = animals[Math.floor(Math.random() * animals.length)]
  let randomNum = birthDate[Math.floor(Math.random() * birthDate.length)]
  let sliceName = name.slice(0, 3)

  const fullnickname = randomAbjective + randomNone + sliceName + randomNum;
  return fullnickname
}

document.getElementById("nicknameForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const userName = document.getElementById("nameText").value;
  const userBirthdate = document.getElementById("birthDateText").value;

  if (userName && userBirthdate) {
    const nickname = generateNickname(userName, userBirthdate);
    document.getElementById("result").textContent = `Ваш ник: ${nickname}`;

}


});



