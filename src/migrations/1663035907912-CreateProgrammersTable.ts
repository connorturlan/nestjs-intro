import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProgrammersTable1663035907912 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'programmer',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'username',
						type: 'varchar',
						isUnique: true,
					},
					{
						name: 'age',
						type: 'int',
					},
					{
						name: 'language',
						type: 'varchar',
						isUnique: true,
					},
					{
						name: 'location',
						type: 'varchar',
						isUnique: true,
					},
					{
						name: 'isEmployed',
						type: 'boolean',
						default: false,
					},
				],
			}),
			true,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
