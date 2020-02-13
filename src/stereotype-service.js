export class StereotypeService {
  async getAge(name) {
    try {
      let response = await fetch(`https://api.agify.io?name=${name}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse.age;
    } catch (error) {
      console.error("There was an error handling your age request: " + error.message);
    }
  }

  async getGender(name) {
    try {
      let response = await fetch(`https://api.genderize.io?name=${name}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse.gender;
    } catch (error) {
      console.error("There was an error handling your gender request: " + error.message);
    }
  }

  async getNationality(name) {
    try {
      let response = await fetch(`https://api.nationalize.io?name=${name}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse.country[0].country_id;
    } catch (error) {
      console.error("There was an error handling your nationality request: " + error.message);
    }
  }
}