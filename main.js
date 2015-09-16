/**
 * Created by Alexander Lex on 16.09.2015.
 *
 * This app demos the use of a single matrix and how to visualize it
 */

//define the main module having 4 dependencies: d3 (external library), caleydo main, caleydo data, and a header template for a common styling
define(['d3', '../caleydo_core/main', '../caleydo_core/data', '../wrapper_bootstrap_fontawesome/header'], function (d3, C, data, header) {
  'use strict';

  var appHeader = header.create(document.body, {
    app: 'Simple Demo App'
  });

  //list a available dataset as a table
  var base = d3.select('#main');

  function renderData(data) {
    var matrix = data;
    // retrieving a single value
   matrix.at(0, 0).then(function(value){
     console.log(value);
   });

    console.log(matrix.length);




  }


  data.get("simpleDemoAppAnscombeIi").then(function(data)
  {
    renderData(data)
  })

});
