export class FizzBuzz {
    message: string;

    constructor(n: number) {
        // if (n % 3 == 0 && n % 5 == 0) {
        //     this.message = 'FizzBuzz';
        // } else if (n % 5 == 0) {
        //     this.message = 'Fizz';
        // } else if(n % 3 == 0) {
        //     this.message = 'Buzz';
        // } else {
        //     this.message = n + ''
        // }

        let isFizz: boolean = n % 5 == 0;
        let isBuzz: boolean = n % 3 == 0;

        if (isFizz && isBuzz) {
            this.message = 'FizzBuzz';
        } else if (isFizz) {
            this.message = 'Fizz';
        } else if (isBuzz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ' ';
        }
    }
}
