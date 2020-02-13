import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { StereotypeService } from './stereotype-service';

$(document).ready(function(){
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();

    (async () => {
      let user = new StereotypeService();
      let age = await user.getAge(name);
      let gender = await user.getGender(name);
      let nationality = await user.getNationality(name);
      displayResults(age, gender, nationality);
    })();

    const displayResults = function(age, gender, nationality) {
      $("#output").text(`aged ${age} years old, ${gender}, and from ${nationality}`);
    }

  });

});