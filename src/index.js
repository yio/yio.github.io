//new gridjs.Grid({
//    columns: ["Name", "Email", "Phone Number"],
//    data: [
//      ["John", "john@example.com", "(353) 01 222 3333"],
//      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
//      ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
//      ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
//      ["Afshin", "afshin@mail.com", '<b>(353) 22 87 8356</b>']
//    ]
//  }).render(document.getElementById("wrapper"));


new gridjs.Grid({
    columns: ['Title', 'Director', 'Producer'],
    server: {
      url: 'json/2020.json',
      then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])
    } 
  }).render(document.getElementById("wrapper"));