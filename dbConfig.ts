import { UserEntity } from 'src/entities/user.entity';

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://auth_owner:npg_qM2wlEQ6diNH@ep-sweet-snowflake-a5a4wxky-pooler.us-east-2.aws.neon.tech/auth?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [UserEntity],

  // ** synchronize in development mode should be true and in production mode should be false ** //
  synchronize: true,
};
