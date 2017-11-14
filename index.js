
function lowerCaseDrivers(array) {
  return array.map(function(e){
    return e.toLowerCase()
  })
  
}

// {firstName: 'Bobby', lastName: 'Smith'  }

function nameToAttributes(names) {
  // names = ['Bobby Smith', 'Sammy Watkins']
  return names.map(function(name) {
    //name "Bobby Smith"
    let fName = name.split(" ")[0]
    let lName = name.split(" ")[1]
      return {firstName: fName, lastName: lName}
  })
}
  
  
  
  
  
  // [{firstName: "Bobby", lastName: "smith"}, {firstName: "Sammy", lastName: "Watkins"}]
}