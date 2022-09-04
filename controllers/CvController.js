const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  edus = [];


  for (let key in educations) {
    edus.push(educations[key]);
  }


  experiences= fs.readFileSync("data/experience.json", { encoding: "utf-8" });
  experiences = JSON.parse(String(experiences));

  exper = [];


  for (let key in experiences) {
    exper.push(experiences[key]);
  }

  skills= fs.readFileSync("data/skills.json", { encoding: "utf-8" });
  skills = JSON.parse(String(skills));

  allSkills = [];


  for (let key in skills) {
    allSkills.push(skills[key]);
  }

  lan= fs.readFileSync("data/language.json", { encoding: "utf-8" });
  lan = JSON.parse(String(lan));

  allLang = [];


  for (let key in lan) {
    allLang.push(lan[key]);
  }

  basic= fs.readFileSync("data/basicInfo.json", { encoding: "utf-8" });
  basic = JSON.parse(String(basic));

  allInfo = [];


  for (let key in basic) {
    allInfo.push(basic[key]);
  }


  res.render("cv", { name: "Tanmoy Ahsan", experiences: exper , educations: edus, skills : allSkills, lan : allLang, info : allInfo});


};

module.exports = { getCV: getCV };
