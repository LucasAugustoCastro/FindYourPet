import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class AnimalRaces1613849332686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Races',
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
                        name:'animal_id',
                        type: 'uuid'
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
        );
        await queryRunner.createForeignKey(
            'Races',
            new TableForeignKey({
              name: 'AnimalRaces',
              columnNames: ['animal_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'Animals',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Races', 'AnimalBreed');
        await queryRunner.dropTable('Races');
    }

}
