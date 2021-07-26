import { container } from "tsyringe";
import "dotenv/config"
import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/implementations/DayjsDateProvider";
import { IMailProvider } from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtherealMailProvider";
import { LocalStorageProvider } from "./StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvide } from "./StorageProvider/implementations/S3StorageProvider";
import { IStorageProvider } from "./StorageProvider/IStorageProvider";
 
container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
)


container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
)

const diskStorage ={
  local: LocalStorageProvider,
  s3: S3StorageProvide
}

container.registerSingleton<IStorageProvider>("StorageProvider", diskStorage[process.env.disk])