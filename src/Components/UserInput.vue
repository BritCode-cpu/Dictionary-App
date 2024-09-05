<template>


  <div class="container">
    <form @submit.prevent="fetchData" class="search-form">
      <input v-model="userInput" placeholder="Enter a word" class="search-input" />
      <button @click="clearInfo" type="submit" class="search-button" >Search</button>
    </form>

    <!--The 'v-if' statment displays data if 'info' has data-->
  <div class="results">
      
      <h3>Results:</h3>
      <div class="result-item">

        <!--The 'H4' tags display data retrived from the dictionary API
        as well as the 'P' tags-->
        
        <p> Definition:
        {{ info[0].definitions[0].definition }}
        </p>

        <br>

        <p> Example: 
            {{ info[0].definitions[3].example ? info[0].definitions[3].example : 'No example'}}
        </p>


      </div>
    </div>
  </div>

  </template>
  
  
  
  
  
  <script>
  
  export default {

    data(){
      //'userInput' captures data a user type into the input field
      //The 'info' array captures the data that the dictionary API returns
      // The 'message' sting returns a personalized error message if there is
      //an error with getting data from the API
      return {
        userInput: '',
        info: [],
        message: 'Error getting API data'
      }
    },
  
    methods: {
      //The fetch functions searches the API URL based on the users input that is capture
      //by 'UserInput' then the dat is assigned to 'this.info' to be used to output
      //data in the template
      fetchData(){
       const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${this.userInput}`;
       fetch(url)
       .then(res => res.json())
       .then(res => this.info = res[0].meanings)
       .then( this.userInput = '')
       .catch(err => console.log(err.message))
      }
  },


  //The 'definitionOfWord' and exampleOfWord function renders the data from the API to the
  //Template
 

}  
  
  </script>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <style scope>
  
   .container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.search-form {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.search-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}

.results {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.result-item {
  margin-bottom: 15px;
}

.result-item h4 {
  margin: 0 0 5px;
  color: #333;
}

.result-item p {
  margin: 0;
  color: #666;
}
</style>
  
  
  