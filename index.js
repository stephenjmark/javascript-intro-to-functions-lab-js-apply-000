function shout(string){
  return string.toUpperCase()

}

function whisper(string){
  return string.toLowerCase()

}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var mixedCase = "I love you, Grandma."

  if (string === string.toLowerCase()) {
      return 'I can\'t hear you!'
  }

  if (string === string.toUpperCase()) {
      return 'YES INDEED!'
  }

  if (string === mixedCase) {
      return "I love you, too."
  }
}
