import{v4 as uuidV4} from "uuid"
import {hash} from "bcryptjs"
import  createConnection from '../index'


async function create() {
  const connection = createConnection()
  const id = uuidV4();
  const password = await hash("admin",8)
 await (await connection).query(
   `INSERT INTO USERS (id, name, email, password, "isAdmin", created_at, driver_license)
    values('${id}', 'admin','ernestomaria@gmail.com', '${password}', 'true', 'now()', 'XXXXXXX' )
    `
 )  
 await (await connection).close
}

create().then(()=>console.log("User admin created!"));