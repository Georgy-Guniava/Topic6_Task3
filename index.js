function validationOfStringConversion(a, b) {
  if (a.length !== b.length) {
    return false;
  }else {
    let res = true;
    a.split('').forEach((item, index) => {
      let firstSt = 0;
      let secondSt = 0;
      let pos = -1;
      while ((pos = a.indexOf(item, pos + 1)) !== -1) {
        if (pos >= 0) {
          firstSt = firstSt + (pos & 1) + 1
        }
      }
      while ((pos = b.indexOf(item, pos + 1)) !== -1) {
        if (pos >= 0) {
          secondSt = secondSt + (pos & 1) + 1
        }
      }
      if (firstSt !== secondSt) {
        res = false
      }
      firstSt = 0;
      secondSt = 0;
    });
    return res;
  }
}

// function validationOfStringConversion(a,b) {
//   let res = true;
//   a.split('').forEach((item, index) => {
//     if ((index & 1) !== (b.indexOf(item) & 1)) {
//       res = false;
//     }
//   });
//   return res;
// }
