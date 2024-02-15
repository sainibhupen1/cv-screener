console.log('this is my 5 project');

// Data is an array of objects which contains information about the candidates

const data =[
    {
        name:'Rohan Das',
        age:18,
        city: 'Kolkata',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]



//CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next:function(){
            return nextIndex<profiles.length ?
            {value:profiles[nextIndex++],done: false}:
            {done:true}
        }
    };
}

const candidates = cvIterator(data);


nextCV();
//button listener foe next buttonn
const next = document.getElementById('next');
next.addEventListener('click', nextCV);



function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currentCandidate !=undefined){
        image.innerHTML =  `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="alert alert-primary">${currentCandidate.age} years old</li>
        <li class="alert alert-primary">Lives in ${currentCandidate.city}</li>
        <li class="alert alert-primary">Name: ${currentCandidate.name}</li>
        <li class="alert alert-primary">Primarily works on ${currentCandidate.language}</li>
        <li class="alert alert-primary">Uses ${currentCandidate.framework} framework</li>
      </ul>`;
    }
    else{
        alert('End of candidate application');
        window.location.reload();
    }
}

