import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;
  @CreateDateColumn()
  public criado_em: Date;

  @UpdateDateColumn()
  public atualizado_em: Date;
}
