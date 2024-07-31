import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async sayHello(name: string = "iqbal"): Promise<string>{
        return name
    }
}
