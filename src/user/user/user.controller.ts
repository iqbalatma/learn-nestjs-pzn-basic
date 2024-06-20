import { Controller, Get, Header, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {
    @Get('')
    @Header('Content-Type', 'application/json')
    index(@Query("name") name: string):Record<string, string>{
        return {
            data: "Hello Json"
        }
    }

    @Post('')
    store(){
        return "POST";
    }


    @Get(':id')
    show(@Param("id") id: string){
        return "GET" + `_${id}`;
    }

    @Patch(':id')
    update(){
        return "PATCH"
    }
}
