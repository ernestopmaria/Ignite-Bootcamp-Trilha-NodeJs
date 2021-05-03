import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import {v4 as uuid4} from 'uuid'
import { Category } from './Category';

@Entity("cars")
class Car{
  @PrimaryColumn()
  id : string

  @Column()
  name:string;

  @Column()
  description:string;

  @Column()
  daily_rate: number;

  @Column()
  available = true;

  license_plate:string;

  @Column()
  fine_amount: number;

  @Column()
  brand:string;

  @ManyToOne(()=>Category)
  @JoinColumn({name:"category_id"})
  category:Category

  @Column()
  category_id:string
  
  @CreateDateColumn()
  created_at:Date

  constructor(){
    if(!this.id){
      this.id =uuid4();
    }
  }
}

export {Car}