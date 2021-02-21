import {MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateUsers1612125275757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        
                    },
                    {
                        name: 'userName',
                        type: 'varchar',
                        
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        
                    },
                    {
                        name: 'state',
                        type: 'varchar',
                        
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        
                    },
                    {
                        name: 'neighborhood',
                        type: 'varchar',
                        
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
