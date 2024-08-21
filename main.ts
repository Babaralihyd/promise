
// ===============================Promise==================================

// syntax

// const anyname = new Promise(()=>{})

// resolve promise 


  const job = new Promise ((resolve,reject )=>{
    resolve ('sucessfull')
    
  });

job.then((value)=>{
    console.log(value);
    

})


// reject promise    


const jobTest = new Promise ((resolve,reject)=>{
    reject('fail ')
});


jobTest.catch((value)=>{
    console.log(value);
})


// Example 

const student1 = new Promise((pass ,fail)=>{
    pass('welcome to university ')
    
});
const student2 = new Promise ((pass , fail)=>{
    fail('sorry imporve study ')
});





 student1.then((value)=>
    {console.log(value);
    }) ;
    
    student2.catch((value)=>{
        console.log(value);
        
    });
           

    

    





























