function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }
  return messages;
}

function countDown(int) {
  if (int < 0) return "Must be a postitve number!";

  while (int >= 0) {
    console.log(int);
    int--;
  }
}
