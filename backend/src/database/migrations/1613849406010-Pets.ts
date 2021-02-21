import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Pets1613849406010 implements MigrationInterface {   
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Pets',
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
                        name: 'animal_type_id',
                        type: 'uuid',
                        
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        
                    },
                    {
                        name: 'color_id',
                        type: 'uuid',
                        
                    },
                    {
                        name: 'breed_id',
                        type: 'uuid',
                        
                    },
                    {
                        name: 'size',
                        type: 'varchar',
                        
                    },
                    {
                        name: 'fur_id',
                        type: 'uuid',
                        
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
            'Pets',
            new TableForeignKey({
              name: 'AnimalType',
              columnNames: ['animal_type_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'Animals',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );

        await queryRunner.createForeignKey(
            'Pets',
            new TableForeignKey({
                name: 'AnimalColor',
                columnNames: ['color_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'Colors',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
        
        await queryRunner.createForeignKey(
            'Pets',
                new TableForeignKey({
                    name: 'AnimalRaces',
                    columnNames: ['breed_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'Races',
                    onDelete: 'SET NULL',
                    onUpdate: 'CASCADE',
                }),
            );
            await queryRunner.createForeignKey(
                'Pets',
                    new TableForeignKey({
                        name: 'AnimalBreed',
                        columnNames: ['user_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'Users',
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    }),
                );
        
        await queryRunner.createForeignKey(
            'Pets',
                new TableForeignKey({
                    name: 'AnimalFur',
                    columnNames: ['fur_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'Furs',
                    onDelete: 'SET NULL',
                    onUpdate: 'CASCADE',
                }),
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Pets', 'AnimalType');
        await queryRunner.dropForeignKey('Pets', 'AnimalColor');
        await queryRunner.dropForeignKey('Pets', 'AnimalRaces');
        await queryRunner.dropForeignKey('Pets', 'AnimalBreed');
        await queryRunner.dropForeignKey('Pets', 'AnimalFur');
        
        await queryRunner.dropTable('Pets');
        
    }
    
    
    

}
