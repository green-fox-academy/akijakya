interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
  }

class Reservation implements Reservationy{
    getDowBooking(): string {
        let days:string [] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        let randomNumber:number = Math.floor((Math.random() * 7));
        let randomDay:string = days[randomNumber].toString();
        return randomDay;
    }

    getCodeBooking(): string {
        let abc123:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        let randomString:string = '';
        for(let i = 0; i < 8; i++) {
            let randomNumber:number = Math.floor((Math.random() * 36));
            randomString += abc123.slice(randomNumber, randomNumber+1);
        }
        return randomString;
    }

    public get booking ():string {
        return 'Booking# ' + this.getCodeBooking() + ' for ' + this.getDowBooking();
    }
}

let res = new Reservation();

for (let i:number = 0; i < 10; i++) {
    console.log(res.booking);
}