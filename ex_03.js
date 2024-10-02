function fillBus(peopleAtBusStops,busSeats){
	let peopleinBus=0
  let index=0
  while(index<=peopleAtBusStops.length){
  	if (busSeats<=peopleinBus){
    	return index
    }
    else{
    	peopleinBus=peopleinBus+peopleAtBusStops[index]
    	index+=1
    }
  }
}
