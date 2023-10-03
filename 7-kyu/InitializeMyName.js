/* Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis' */

function initializeNames(name) {
  // Insert your brilliant code here
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0];

  let firstName = parts[0];
  const lastName = parts[parts.length - 1];
  if (parts.length === 2) return `${firstName} ${lastName}`;

  for (let i = 1; i < parts.length - 1; i++) {
    const middleName = parts[i];
    const initial = middleName.charAt(0).toUpperCase();
    firstName = `${firstName} ${initial}.`;
  }
  return `${firstName} ${lastName}`;
}

console.log(initializeNames("Lois Mary Lane"));
console.log(initializeNames("Lois Lane"));
