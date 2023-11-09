const getStudents = (id) => {
  if (id) {
    return `select * from students where ID =${id};`;
  } else {
    return `select * from students; `;
  }
};

const checkStudent = ({ id, email }) => {
  if (email) {
    return `select email from students where email='${email}';`;
  }
  if (id) {
    return `select id from students where id=${id};`;
  }
};

const addStudent = ({ name, email, age, dob }) => {
  return `insert into students(name,email,age,dob) 
  values('${name}','${email}','${age}','${dob}');`;
};

const removeStudent = ({ id }) => {
  return `delete from students where id=${id}`;
};
module.exports = { getStudents, checkStudent, addStudent, removeStudent };
