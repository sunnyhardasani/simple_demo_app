/**
 * Created by Alexander Lex on 16.09.2015.
 *
 * This app demos the use of a single matrix and how to visualize it
 */

//define the main module having 4 dependencies: d3 (external library), caleydo main, caleydo data, and a header template for a common styling
define(['d3', '../caleydo_core/main', '../caleydo_core/data', '../wrapper_bootstrap_fontawesome/header','../caleydo_core/range'], function (d3, C, data, header, ranges) {
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

    matrix.data(ranges.parse(',0')).then(function (arr) {
      console.log(arr);
    });

      matrix.at(1, 1).then(function(value){
     console.log(value);
   });


 //     matrix.view(ranges.parse(',0')).data().then(function (arr) {
 //     console.log(arr);
 //});
 //matrix.t.data(ranges.parse('0,')).then(function(arr) {
 //     console.log(arr);
 //});


//      ranges.parse(',0') <=>
//ranges.range([0,-1],[0,1]) <=>
//ranges.list(ranges.Range1D.all(), ranges.Range1D.from([0]))


  }


  data.get("simpleDemoAppAnscombeIi").then(function(data)
  {
    renderData(data)
  })

});
