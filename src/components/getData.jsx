const GetData = async (getPeople, setGetPeople) => {

    let url = `https://swapi.dev/api/people`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      if (data) {
        let result = JSON.stringify(data)
        setGetPeople([...getPeople, JSON.parse(result)]);
      }
    } catch {
      console.log('No info here');
    }
  }

  export default GetData;
