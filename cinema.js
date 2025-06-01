function main(params) {
    
    const cinemasArray = [
      {
        "id": 1,
        "name": "Shaw Theatres Lido",
        "location": "Orchard"
      },
      {
        "id": 2,
        "name": "Shaw Theatres Balestier",
        "location": "Balestier Road"
      },
      {
        "id": 3,
        "name": "Shaw Theatres Jewel",
        "location": "Changi Airport"
      },
      {
        "id": 4,
        "name": "Shaw Theatres Nex",
        "location": "Serangoon"
      },
      {
        "id": 5,
        "name": "Shaw Theatres Lot One",
        "location": "Chua Chu Kang"
      }
    ];
  
    return {
      statusCode: 200,
      body: cinemasArray
    };
  }
    exports.main = main;
  