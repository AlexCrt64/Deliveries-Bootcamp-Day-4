function findHousing(housingToFind,housingList){
  let index=0
  while (index<housingList.length){
    if (housingList[index].toLowerCase()===housingToFind.toLowerCase()){
      return [index+1,housingList[index]]
    }
    else{
      index+=1
    }
  }
  return null
}
