import { Injectable } from '@nestjs/common';

export class MailService {
    send() {
        console.log("Send email")
    }
}

export const mailService = new MailService();
