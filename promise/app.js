///PROMERSAS

const miPromesa= new Promise((resolve,reject)=>{
    const timepoRejected= Math.floor(Math.random()*10000)+1000
    const timepoResolved= Math.floor(Math.random()*10000)+1000
    console.log('Reject', timepoRejected);
    console.log('Satisfecha', timepoResolved);
})



setTimeout(()=>{reject('La promesa Fallo')},timepoRejected)



Timeout(()=>{
    resolve('Promesa satisfecha')
}, timepoResolved)


miPromesa.then((respuesa)=>console.log(respuesa),(razon)=>console.log(razon))



function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  f1();


  async function f3() {
    try {
      var z = await Promise.reject(30);
    } catch(e) {
      console.log(e); // 30
    }
  }
  f3();
