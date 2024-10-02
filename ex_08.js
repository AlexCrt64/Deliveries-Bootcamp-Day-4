function attribuerGradeEnergie(consommation) {
    if (consommation <= 50){
    	return 'A'
    }
    if (consommation <= 90){
    	return 'B'
    } 
    if (consommation <= 150){
    	return 'C'
    } 
    if (consommation <= 230){
    	return 'D'
    } 
    if (consommation <= 330){
    	return 'E'
    }
    if (consommation <= 450){
    	return 'F'
    }
    else{
    	return 'G'
    }  
}
function trierLogementsParEnergie(listeLogements) {
    listeLogements.sort((a, b) => a[1] - b[1])
    return listeLogements.map(logement => {
        const nom = logement[0]
        const consommation = logement[1]
        const grade = attribuerGradeEnergie(consommation)
        return [nom, consommation, grade]
    })
}
