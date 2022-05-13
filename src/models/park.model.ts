let parkingLot:string[][] = [
    ['B1111AAA','B1111BBB','B1111CCC','B1111DDD','B1111EEE','B1111FFF','B1111GGG', 'B1111HHH', 'B1111III', 'B1111JJJ'], //B1
    ['B2222AAA','B2222BBB','B2222CCC','0','B2222EEE','B2222FFF','B2222GGG', 'B2222HHH', 'B2222III', 'B2222JJJ', 'B2222KKK', 'B2222LLL'], //B2
    ['B3333AAA','B3333BBB','B3333CCC','B3333DDD','B3333EEE','B3333FFF','B3333GGG', 'B3333HHH', 'B3333III', 'B3333JJJ', 'B3333KKK', 'B3333LLL', 'B3333MMM', 'B3333NNN'], //B3
    ]

interface Car {
    plate: string;
}

export async function modelPark(car : Car) {
    let result = {
        level : '',
        slot : 0
    }

    const level = parkingLot.findIndex(level => level.includes('0'));
    let slot = 0

    if(parkingLot[level]){
        slot = parkingLot[level].indexOf('0');
    }

    if(level !== -1 && slot !== 0){
        parkingLot[level][slot] = car.plate

        result = {
            level : `B${level+1}`,
            slot : slot+1
        }
    }

    return result
}

export async function modelLeave(car : Car) {
    let result = {
        status : "not found"
    }

    const level = parkingLot.findIndex(level => level.includes(car.plate));
    let slot = 0

    if(parkingLot[level]){
        slot = parkingLot[level].indexOf(car.plate);
    }

    if(level !== -1 && slot !== 0){
        parkingLot[level][slot] = '0'

        result = {
            status : "accepted"
        }
    }

    return result
}



