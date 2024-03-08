export default class ApiService {
  static getBankList() {
    return new Promise((resolve, reject) => {
      const fetchPromise = fetch(
        'https://dev.obtenmas.com/catom/api/challenge/banks',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Request timed out'));
        }, 15000);
      });

      // Usar Promise.race para competir entre el fetch y el timeout
      Promise.race([fetchPromise, timeoutPromise])
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          console.error('ApiService.js:getBankList:error ', error);
          reject(error);
        });
    });
  }
}
