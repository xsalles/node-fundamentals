import { Readable } from 'stream'

class OneToHundredStrem extends Readable {

    index = 1
   _read(){
    const i = this.index++

    setTimeout(() => {
        if (i > 100){
            this.push(null)
        } else {
            const buf = Buffer.from(String(i))
    
            this.push(buf + '\n')
        }

    }, 1000)
}
}

new OneToHundredStrem().pipe(process.stdout)