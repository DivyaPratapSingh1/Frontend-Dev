
// Q5 - Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = false;

let access = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log(access ? "Secure" : "Unsafe");
