//Example callback function

const Data = (call) => {
    setTimeout(() => {
      const user = { name: 'Rezaonul Hasan', age: 25 ,  home : 'Bogra'   };
      call(user);
    }, 2000); // Simulate a 2-second delay before the data is ready
  };
  
  // Callback function that will be executed after the data is fetched
  const displayData = (userData) => {
    console.log(`Name: ${userData.name}, Age: ${userData.age},  Home: ${userData.home}` );
  };
  
  // Call the fetchDataFromServer function and pass the displayData function as the callback
  Data(displayData);
  console.log("Fetching data...");
  