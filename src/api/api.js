import axios from "axios";

export const getQuiz = async (amount = "", type = "", category = "", difficulty = "") => {
   try {
      // let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    let url = `https://opentdb.com/api.php?amount=${amount}`;
    if(type === "multiple" || type === "boolean") {
      url = url + `&type=${type}`
    }
    if (category != "") {
      url = url += `&category=${category}`
    }
    if (difficulty != "") {
      url = url += `&difficulty=${difficulty}`
    }
    const response = await axios.get(url);
    console.log(url)
    console.log(response)
    return response
   } catch (error) {
    console.error(error)
   }
};