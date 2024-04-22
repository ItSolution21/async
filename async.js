
//asyncrnous code

// function cook(){
//     setTimeout(function(){
//         console.log('cooking');
//     }, 3000);
// }

// function eat(){
//     setTimeout(function(){
//         console.log('eating');
//     }, 1000);
// }

// function trash(){
//     setTimeout(function(){
//         console.log('throwing out');
//     }, 500);
// }



// cook();
// eat();
// trash();


//callback -- function that is passed as a parameter to another function


// function cook(callback){
//     setTimeout(function(){
//         console.log('cooking');
//         callback();
//     }, 3000);
// }

// function eat(callback){
//     setTimeout(function(){
//         console.log('eating');
//         callback();
//     }, 1000);
// }

// function trash(callback){
//     setTimeout(function(){
//         console.log('throwing out');
//         callback();
//     }, 500);
// }

// cook(()=>{
//     eat(()=>{
//         trash(()=>{
//             console.log('done');
//         });
//     });
// });






// function cook(callback){
//     setTimeout(function(){
//         console.log('cooking');
//        callback();
//     }, 3000);
// }

// function eat(){
//     setTimeout(function(){
//         console.log('eating');
//     }, 1000);
// }

// cook();
// eat();

// cook(eat)



// promises -- we can define what we want with the asyncronous code 
            // -- resolve -- success
            // -- reject -- failure



            function walkDog(){
                return new Promise((resolve, reject)=>{
                    setTimeout(() => {
                        resolve("You walked the dog")  
                     }, 1500);
                })
            
            }
            
            
            function kitchen(){
                return new Promise((resolve, reject)=>{
                    setTimeout(() => {
                        resolve("You clean the kitchen")
                     }, 2500);
                })
            }
            
            function trash(){
                return new Promise((resolve, reject)=>{
                    setTimeout(() => {
                        resolve("You took out the trash")
                     }, 500);
                })
            }
            
            function watchTV(){
                return new Promise((resolve, reject)=>{
                    setTimeout(() => {
                        resolve("You watched TV")
                     }, 1000);
                })
            }
            
            // walkDog().then(value=> {console.log(value); return kitchen()})
            //         .then(value=> {console.log(value); return trash()})
            //     .then(value=> {console.log(value); console.log("You are done")});

            // walkDog().then(value=> {console.log(value); return kitchen()})
            //         .then(value=> {console.log(value); return trash()})
            //         .then(value=> {console.log(value); return watchTV()})
            //         .then(value =>{console.log(value); console.log("I enjoyed it")})
            

            async function work(){
                try{
                    const result2 = await trash();
                    console.log(result2);
                    const result = await walkDog();
                    console.log(result);
                    const result3 = await watchTV();
                    console.log(result3);
                    const result1 = await kitchen();
                    console.log(result1);
                   
                   
                }
                catch(err){
                    console.log(err)
                }
            }

            work();