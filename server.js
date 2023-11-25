const DAY_OF_WEEK = process.env.DAY_OF_WEEK
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${DAY_OF_WEEK} rocks!`);
    await sleep(5000);
  }
}

main();
