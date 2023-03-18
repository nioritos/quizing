export const getQuiz = async (amount = "10", type = "multiple", category = "10", difficulty = "easy") => {
   try {
    let url = `https://opentdb.com/api.php?amount=${amount}&category=10&difficulty=easy&type=multiple`;
    const response = await axios.get(url);
    return response
   } catch (error) {
    console.log(error)
   }
};