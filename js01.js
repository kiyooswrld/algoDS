// input 1.1.1.1
// output 1[.]1[.]1[.]1

function changeIP(address) {
  return address.split(".").join("[.]")
}

const myIP = "1.1.1.1"

console.log(changeIP(myIP))