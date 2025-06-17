const staff = {
  tim: "change",
  jim: "accounts",
  randy: "canteen",
  sandy: "change",
  andy: "change",
  katie: "IS",
  laura: "change",
  saajid: "IS",
  alex: "trading",
  john: "accounts",
  mr: "finance",
};

const score = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  "pissing about": 25,
};

function boredom(staff) {
  let scoreSum = 0;

  for (const person in staff) {
    const dept = staff[person];
    //   console.log(dept);
    const deptScore = score[dept];
    //   console.log(deptScore);
    scoreSum = scoreSum + deptScore;
    console.log(scoreSum);
  }

  if (scoreSum <= 80) {
    return "kill me now";
  } else if (scoreSum < 100 && scoreSum > 80) {
    return "i can handle this";
  } else {
    return "party time!!";
  }
}

console.log(boredom(staff));
