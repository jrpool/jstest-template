/*
  Function declaration for _stringLength and export statement making that
  function the default export from this module.
  Arguments:
    anyString.
  Preconditions:
    0. anyString is a string.
*/
/*
  Define a function to return the length of a specified string and make it
  the default export from this module.
*/
export default function stringLength(anyString) {
  // If anyString is a string:
  if (typeof anyString === 'string') {
    // Return its length.
    return anyString.length;
  }
  // Otherwise, i.e. if anyString is not a string:
  else {
    // Return a failure result.
    return undefined;
  }
}
