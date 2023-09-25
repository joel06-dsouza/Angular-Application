// logger.ts



export class BaseLogger {
    log() {
        
    }
}


export class ConsoleLogger extends BaseLogger{
    count: number = 0;

    override log() {
        this.count += 1;
        // console.log(this.count)
        console.log("Using Console logger within base... with count value" + this.count)
    }
}


export class FileLogger extends BaseLogger {
    override log() {
        console.log("FileLogger Used!!!");
    }
}

export class DBLogger extends BaseLogger {
    override log() {
        console.log("DBLogger Used!!!");
    }
}
