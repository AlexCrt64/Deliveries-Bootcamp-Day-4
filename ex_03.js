function fillBus(peopleAtBusStops,busSeats){
	let peopleinBus=0
  let index=0
  while(index<=peopleAtBusStops.length){
  	if (busSeats<=peopleinBus){
    	return index-1
    }
    else{
    	peopleinBus=peopleinBus+peopleAtBusStops[index]
    	index+=1
    }
  }
}
