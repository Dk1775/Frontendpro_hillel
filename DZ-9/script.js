const users = [
    { 
        name: 'Victor',
        gender: 'male',
        dob: 1985
    },
    { 
        name: 'Alex',
        gender: 'male',
        dob: 1993,
    },
    { 
        name: 'James',
        gender: 'male',
        dob: 2003,
    },
    { 
        name: 'David',
        gender: 'male',
        dob: 1985,
    },
    { 
        name: 'Alexandra',
        gender: 'female',
        dob: 1995,
    },
    { 
        name: 'Margareth',
        gender: 'female',
        dob: 2005,
    },
    { 
        name: 'Jane',
        gender: 'female',
        dob: 1956,
    },
    { 
        name: 'Pitt',
        gender: 'male',
        dob: 2011,
    }
    ]; 
    
    const assignIndex = users.forEach((user, index) => user.index = index
    );
    console.log(users);
    
  
    function maleOrFemale(arr) {
    
        const reducer = users.reduce((acc, user) => {
            if(user.gender == 'male') {
                acc.male++;
            } else {
                acc.female++;
            }
            return acc;
        }, {
            male: 0,
            female: 0
        });
       
        return reducer.male > reducer.female ? 'More males' : 'More females'; 
    }
    console.log(maleOrFemale());
    

    const arr = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo']; 

    const reducedObj = arr.reduce((counter, el) => {
        counter[el] = (counter[el] || 0) + 1;
        return counter;     
    }, {});

    console.log(reducedObj);

const userObj = {
    name: 'mykola',
    age: 21
}

const result = function reverseObj(obj) {
    let reversed = {};
    let keys = Object.keys(userObj); 
    keys.forEach(key => {
        let value = userObj[key];
        reversed[value] = key;
    });
 return reversed;
}
console.log(result(userObj));
