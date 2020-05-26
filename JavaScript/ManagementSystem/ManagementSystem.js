class Task {
    constructor(taskname) {
        this.taskname = taskname;
        this.subtasklist = [];
    }

    addsubtask(newsubtask) {
        this.subtasklist.push(newsubtask);
    }

    progress() {
        var progressstate = this.subtasklist.filter(element => element.state === "done");
        return (progressstate.length / this.subtasklist.length);
    }
}

class Subtask {
    constructor(name, urgency, duration, state) {
        this.name = name;
        this.urgency = urgency;
        this.duration = duration;
        this.state = state;
    }
}

class jobdescription {
    constructor(jobname, experienceindex, basicsalary) {
        this.jobname = jobname;
        this.experienceindex = experienceindex;
        this.basicsalary = basicsalary;
    }
}

class employee {
    constructor(name, experience, freedays) {
        this.fullname = name;
        this.role = "";
        this.experience = experience;
        this.salary = 0;
        this.monthlygoal = 0;
        this.tasklist = [];
        this.freedays;
    }
    addnewjob(newjob) {
        this.salary = Math.pow(newjob.experienceindex, this.experience) * newjob.basicsalary;
        this.role = newjob.jobname;
    }
    addtask(newtask) {
        this.tasklist.push(newtask);
        var temptime = 0;
        var addtime = (accumulator, currentValue) => accumulator + currentValue;
        var tasksubtasklist = this.tasklist.map(x => x.subtasklist);
        for (var element of tasksubtasklist) {
            temptime = temptime + element.map(x => x.duration).reduce(addtime);
        }
        this.monthlygoal = temptime;
    }
}

var employeelist = [];

function addemployee(name, experience, freedays) {
    employeelist.push(new employee(name, experience, freedays));
}

function findemployee(employeename) {
    var i;
    var a = "a";
    var b = "b"
    for (i = 0; i < employeelist.length; i++) {
        a = String(employeelist[i].fullname.value);
        b = String(employeename.value);
        console.log(a == b);
        return (i);
    }
}

function searchemployee() {
    var name = document.getElementById("employename").value;
    console.log(name);
    console.log(findemployee(name));
    var thisemployee = employeelist[findemployee(name)];

    document.getElementById("name").innerHTML = thisemployee.fullname;
    document.getElementById("role").innerHTML = thisemployee.role;
    document.getElementById("experience").innerHTML = thisemployee.experience;
    document.getElementById("salary").innerHTML = thisemployee.salary;
    document.getElementById("monthlygoal").innerHTML = thisemployee.monthlygoal;
    document.getElementById("freedays").innerHTML = thisemployee.freedays;
}

var newsubtask = new Subtask("newsubtask", "low", 1, "notdone");
var a = new Subtask("newsubtask", "low", 2, "notdone");
var newtask = new Task("newtask");
newtask.addsubtask(newsubtask);
newtask.addsubtask(a);
// var newemployee = new employee("noname", 3, 14);
// newemployee.addtask(newtask);
var newjob = new jobdescription("Singer", 1.5, 50);
// newemployee.addnewjob(newjob);
// console.log(newemployee);
addemployee("noname", 3, 14);
employeelist[0].addtask(newtask);
employeelist[0].addnewjob(newjob);
console.log(employeelist[0]);
console.log(employeelist[0].fullname)
console.log(findemployee(newtask));
var select = document.getElementById("employeeselect");
console.log(select);
for (var i = 0; i <= employeelist.length; i++) {
    option = document.createElement('option');
    option.value = option.text = i;
    select.add(option);
}