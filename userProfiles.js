class UserProfiles {

  async getUsers() {
    const repsonse = await fetch('https://randomuser.me/api/?results=300');
    const data = await repsonse.json();
    // console.log(data);
    // console.log(data.results.length);
    return data.results;
  }

}