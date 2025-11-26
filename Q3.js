// Q3 arrow vs normal function
const user = {
    name: "John",
    showName: () => {
        console.log(this.name); // undefined
    }
};

user.showName();

// fix
const user2 = {
    name: "John",
    showName: function(){
        console.log(this.name);
    }
};

user2.showName();
