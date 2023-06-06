//-------------------------------Resume data in json format-----------------------------------------------------
let resume=[{'name':'s.mohammed azis',
'contactdetails':{
    'Phone number':'9750298672',
    'emailid':'azisvvm@gmail.com'
}},
 {"education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "university": "University of Anna",
      "location": "trichy",
      "dates": "2020 - 2023"
    }
  ]},
  {"skills": [
    "JavaScript",
    "Python",
    "Ruby on Rails",
    "HTML",
    "CSS",
    "Git",
    "SQL"
  ]}];
  //--------------------------------loops for (traditional) jason objects---------------------------------------------------------
  for(i=0;i<resume.length;i++){
    console.log(resume[i])
}
  //--------------------------------loops for (in) jason objects--------------------------
  for (i in resume){
    console.log(resume[i])

  } 
  //--------------------------------loops for(of) jason objects--------------------------
  for (i of resume) {
    console.log(i);
  } 
 //--------------------------------loops (foreach) jason objects--------------------------

  resume.forEach(element=>(console.log(element)));

