import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAutomoveis1637625312461 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'automoveis',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'ano',
                    type: 'int'
                },
                {
                    name: 'modelo',
                    type: 'varchar'
                },
                {
                    name: 'marca',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('automoveis')
    }

}
