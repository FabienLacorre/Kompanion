import { MigrationInterface, QueryRunner } from "typeorm";

export class InitUserMigration1725142388627 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // create user table
    await queryRunner.query(
      `CREATE TABLE "user" (id SERIAL PRIMARY KEY,email VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL);`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // drop user table
    await queryRunner.query(`DROP TABLE user;`);
  }
}
