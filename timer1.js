process.argv.slice(2).forEach(num => {
  if (!isNaN(num) && num >= 0) {
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, num * 1000);
  } else {
    process.stdout.write('Not a Valid Input');
  }
});
