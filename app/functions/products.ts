export const getProductsFromAPI = () => {
    const headers = new Headers();
    headers.append('accept', 'application/json');
    headers.append('X-API-KEY', String(process.env.NEXT_PUBLIC_CHIMONEY_API_KEY))
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     'X-API-KEY': process.env.NEXT_PUBLIC_CHIMONEY_API_KEY?.toString()
    //   }
    // };
    
    return fetch('https://api.chimoney.io/v0.2/info/assets', {
      method: 'GET',
      headers: headers
    })
      .then(response => response.json())
  }