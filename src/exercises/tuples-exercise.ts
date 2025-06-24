//Exercise: Create a tuple type called personInfo that represents: name (string), age (number), hasDriverLicense (boolean)

let tuple: [string, number, boolean] = ["Xavier", 27, false];

function isLegalAge(tuple: [string, number, boolean]): boolean {
  if (tuple[1] >= 18) {
    return true;
  } else {
    return false;
  }
}

function haveDriverLicense(tuple: [string, number, boolean]): boolean {
  if (tuple[2]) {
    return true;
  } else {
    return false;
  }
}

function getTicket(tuple: [string, number, boolean]): boolean {
  if (!haveDriverLicense(tuple) || !isLegalAge(tuple)) {
    return true;
  } else {
    return false;
  }
}

function ticketReason(tuple: [string, number, boolean]): string {
  if (!isLegalAge(tuple)) {
    return "You are under legal age.";
  } else if (!haveDriverLicense(tuple)) {
    return "You don't have a Driver License.";
  } else {
    return "Other reason.";
  }
}

function printResult(tuple: [string, number, boolean]): void {
  if (getTicket(tuple)) {
    console.log(`${tuple[0]}, you got a ticket!
Reason: ${ticketReason(tuple)}`);
  } else {
    console.log(`${tuple[0]}, you didn't got any ticket, good job!`);
  }
}

printResult(tuple);