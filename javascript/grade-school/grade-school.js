export function GradeSchool() {
  this.list = {};
  let self = this;

  function push(name, grade) {
    self.list[grade].push(name);
    self.list[grade].sort();
  }

  return {
    add: (name, grade) => {
      if (this.list[grade]) {
        push(name, grade);
      } else {
        this.list[grade] = [];
        push(name, grade);
      }
    },

    grade: (num) => {
      if (this.list[num]) {
        return this.list[num].slice(0);
      } else {
        this.list[num] = [];
        return this.list[num].slice(0);
      }
    },

    roster: () => {
      let newObj = JSON.parse(JSON.stringify(this.list));
      return newObj;
    }
  }
}
