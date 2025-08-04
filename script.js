    let btn = document.querySelector('button');
    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let div = document.querySelector('.output');

 fetch("https://688ddba1a459d5566b135cdf.mockapi.io/users")

      .then((res) => res.json())
      .then((data) => {
      
         data.map((item)=>{
    div.innerHTML += `
          <div>
            <h1>${item.name}</h1>
            <p>${item.password}</p>
          </div>
        `;
      })
     
         })
    
    btn.addEventListener('click', () => {
      fetch("https://688ddba1a459d5566b135cdf.mockapi.io/users", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: inp1.value,
          password: inp2.value
        })
     
       
      })

    });
   