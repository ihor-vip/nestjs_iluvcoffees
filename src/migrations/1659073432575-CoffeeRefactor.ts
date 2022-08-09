import {MigrationInterface, QueryRunner} from "typeorm";

export class CoffeeRefactor1659073432575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`
    }

}
