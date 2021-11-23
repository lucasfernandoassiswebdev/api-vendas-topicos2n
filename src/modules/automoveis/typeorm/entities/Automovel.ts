import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// decorator -> padrão de projeto
@Entity('automoveis')
class Automovel {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('int')
    ano: number

    @Column()
    modelo: string

    @Column()
    marca: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export default Automovel