import{v4 as uuidV4} from "uuid"
import {hash} from "bcryptjs"
import  createConnection from '../index'


async function create() {
  const connection = createConnection()
  const id = uuidV4();
  const password = await hash("admin",8)
 await (await connection).query(
   `INSERT INTO users (id, name, email, password, isAdmin, created_at)
    values('${id}', 'admin','ernestomaria93@gamil.com', '${password}', 'true', '${new Date()}' )
    `
 )  
}

create().then(()=>console.log("User admin created!"));