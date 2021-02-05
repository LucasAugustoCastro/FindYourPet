import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  
  @Column()
  name!: string;

  @Column()
  userName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  state!: string;

  @Column()
  city!: string;

  @Column()
  neighborhood!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

}

export default Users;