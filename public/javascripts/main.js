(() => {
  let getButton = document.querySelectorAll('.getButton');

  function getData(){
    //debugger;
    let url = `api/${this.id}`; // does the samee as ?car = + this.id

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      //change page content here
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function deleteARecord(){
    //debugger;
    let url = `api/${this.id}`; // does the samee as ?car = + this.id

    fetch(url, {method: 'delete'})
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      //change page content here
    })
    .catch((error) => {
      console.log(error);
    });
  }


  getButton.forEach(button => button.addEventListener('click', getData));
  deleteButton.forEach(button => button.addEventListener('click', deleteARecord);
})();
