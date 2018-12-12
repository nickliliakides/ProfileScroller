document.addEventListener("DOMContentLoaded", getUsers);

const up = new UserProfiles();

function getUsers() {
  up.getUsers()
    .then(res => {
      const profiles = profileIterator(res);
      nextProfile();
      document.getElementById("next").addEventListener("click", nextProfile);

      function nextProfile() {
        const currentProfile = profiles.next().value;

        if (currentProfile !== undefined) {
          document.getElementById("imageDisplay").innerHTML = `<img src="${
            currentProfile.picture.large
          }" style="width:200px; height:200px;" class="img-thumbnail">`;
          document.getElementById(
            "profileDisplay"
          ).innerHTML = `<ul class="list-group">
        <li class="list-group-item"><strong>Name:</strong> ${currentProfile.name.first
          .charAt(0)
          .toUpperCase() + currentProfile.name.first.substr(1)}</li>
        <li class="list-group-item"><strong>Gender:</strong> ${
          currentProfile.gender
        }</li>
        <li class="list-group-item"><strong>Age:</strong> ${
          currentProfile.dob.age
        }</li>
        <li class="list-group-item"><strong>Email:</strong> ${
          currentProfile.email
        }</li>
        <li class="list-group-item"><strong>Location:</strong> ${currentProfile.location.city
          .charAt(0)
          .toUpperCase() +
          currentProfile.location.city.substr(
            1
          )}  ${currentProfile.location.state.charAt(0).toUpperCase() +
            currentProfile.location.state.substr(1)}  ${currentProfile.nat}</li>
        </ul>`;
        } else {
          window.location.reload();
        }
      }
    })
    .catch(err => console.log(err));
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
