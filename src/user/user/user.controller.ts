import { Controller, Get, Header, Inject, Optional, Param, Patch, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { Connection } from '../connection/connection';
import { MailService } from '../mail/mail.service';

@Controller('/api/users')
export class UserController {
    @Inject()
    private userService: UserService;

    @Inject()
    @Optional()
    private optionalUserService: UserService;
    constructor(
        private service: UserService,
        private connection: Connection,
        private mailService: MailService,
    ) {
        
    }
    @Get("set-cookie")
    async setCookie(@Query("name") name: string, @Res() response: Response) {
        response.cookie("name", name)
        response.status(200).send("Success set cookie name value to " + name)
    }


    @Get("get-cookie")
    async getCookie(@Req() request: Request) {
        return request.cookies["name"]
    }


    @Get("get-connection")
    async getConnection() {
        return this.connection.getName()
    }


    @Get('')
    @Header('Content-Type', 'application/json')
    async index(@Query("name") name: string): Promise<Record<string, string>>{
        this.mailService.send()
        return {
            sayHello: await this.service.sayHello(),
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
