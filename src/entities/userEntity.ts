import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() // decorator
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: string;
}

// module.exports = User;
