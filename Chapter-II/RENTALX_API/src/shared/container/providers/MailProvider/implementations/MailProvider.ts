import { IMailProvider } from "../IMailProvider";


class MailProvider implements IMailProvider{
  
  sendMail(to: string, subject: string, body: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export {MailProvider}