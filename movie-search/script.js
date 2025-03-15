const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2VlMTU3MTkyOWI4OWUxNjI5ZmY3Mjg4ODY5ODllOCIsIm5iZiI6MTcyNzE5NDk4Mi41MTM4LCJzdWIiOiI2NmYyYmU4YWE4MmIwMDU3MDMyNmUzMWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9sNyApV-_Hbq5pJWROlCGOkUldvscpzkySFe0ojgvMw'
  }
};

document.querySelector("#searchData").addEventListener("input",()=>{
  let search = document.getElementById("searchData").value;

  document.querySelector(".main").innerHTML = "";

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=33ee1571929b89e1629ff728886989e8&query=${search}`)
  .then(response => response.json())
  .then((res)=>{
    let r = res.results;
    if(r.length == 0)
    {
      document.querySelector(".main").innerHTML = `<h1 class="mt-5 text-danger">${search} is not found...!</h1>`;
    }
    else
    {
    let data = "";
    let color = "";
    res.results.map((el,i)=>{
      let percentage = Math.ceil(el.vote_average*10);
      if(percentage > 60)
      {
        color = "#4caf50";
      }
      else if(percentage > 40)
      {
        color = "#cccf30";
      }
      else if(percentage == 0)
      {
        color = "#585858";
      }
      else
      {
        color = "red";
      }
      data += `
      <div class="box p-0 pb-4 shadow rounded-2">
      <div class="position-relative">
      <img class="w-100" src="https://image.tmdb.org/t/p/original/${el.backdrop_path}">
        <div class='main-circle position-absolute'>
        <div class="circle" style="background: conic-gradient(${color} ${percentage}%, #585858 0%);">
        <div class="inner-circle">
          <span id="progress-value">${percentage}<sup>%</sup></span>
        </div>
        </div>
      </div>
      </div>
        <h1 class="fs-5 mt-4 pt-2 ps-3 p-0" style="height:70px;">${el.original_title}</h1>
        <p class="m-0 ps-3">${el.release_date}</p>
      </div>
      `;
    }).join("");
    document.querySelector(".main").innerHTML += data;
  }
  })
  .catch(err => console.error(err));  

  // fetch(`https://api.themoviedb.org/3/search/tv?api_key=33ee1571929b89e1629ff728886989e8&query=${search}`)
  // .then(response => response.json())
  // .then((res)=>{
  //   let r = res.results;
  //   if(r.length == 0)
  //   {
  //     console.log("false"); 
  //   }
  //   else
  //   {
  //   let data = "";
  //   let color = "";
  //   res.results.map((el,i)=>{
  //     let percentage = Math.ceil(el.vote_average*10);
  //     if(percentage > 60)
  //     {
  //       color = "#4caf50";
  //     }
  //     else if(percentage > 40)
  //     {
  //       color = "#cccf30";
  //     }
  //     else if(percentage == 0)
  //     {
  //       color = "#585858";
  //     }
  //     else
  //     {
  //       color = "red";
  //     }
  //     data += `
  //     <div class="box p-0 pb-4 shadow rounded-2">
  //     <div class="position-relative">
  //     <img class="w-100" src="https://image.tmdb.org/t/p/original/${el.backdrop_path}">
  //       <div class='main-circle position-absolute'>
  //       <div class="circle" style="background: conic-gradient(${color} ${percentage}%, #585858 0%);">
  //       <div class="inner-circle">
  //         <span id="progress-value">${percentage}<sup>%</sup></span>
  //       </div>
  //       </div>
  //     </div>
  //     </div>
  //       <h1 class="fs-5 mt-4 pt-2 ps-3 p-0">${el.original_title}</h1>
  //       <p class="m-0 ps-3">${el.release_date}</p>
  //     </div>
  //     `;
  //   }).join("");
  //   document.querySelector(".main").innerHTML += data;
  // }
  // })
  // .catch(err => console.error(err));  

})