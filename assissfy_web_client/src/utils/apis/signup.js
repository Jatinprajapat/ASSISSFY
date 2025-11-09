import axios from 'axios';

const signup = async (username, email, password) => {
let language = 'en';
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password,
        preferredLanguage: language
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      //throw Error(error.response.data.message);
    }
  };
  
  signup('assissfy', 'testassissfy@gmail.com', 'password123');