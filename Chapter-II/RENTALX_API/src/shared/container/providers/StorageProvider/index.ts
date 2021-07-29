import { container } from "tsyringe"
import { LocalStorageProvider } from "./implementations/LocalStorageProvider"
import { S3StorageProvide } from "./implementations/S3StorageProvider"
import { IStorageProvider } from "./IStorageProvider"


const diskStorage ={
  local: LocalStorageProvider,
  s3: S3StorageProvide
}

container.registerSingleton<IStorageProvider>("StorageProvider", diskStorage[process.env.disk])