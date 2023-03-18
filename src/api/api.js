import axios from "axios";

export const getQuiz = async (amount = "", type = "", category = "", difficulty = "") => {
   try {
      // let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
      let url = `https://opentdb.com/api.php?amount=${amount}`;
    if(type === "multiple" || type === "boolean") {
      url = url + `&type=${type}`
      console.log(`this is ${type}`)
    }
    if (category != "") {
      url = url += `&category=${category}`
      console.log(`this is ${category}`)
    }
    if (difficulty != " ") {
      url = url += `&difficulty=${difficulty}`
      console.log(`this is ${difficulty}`)
    }
    console.log(url);
    const response = await axios.get(url);
    console.log(response)
    return response
   } catch (error) {
    console.error(error)
   }
};