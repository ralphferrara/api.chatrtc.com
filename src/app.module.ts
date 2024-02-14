import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './routes/auth/auth.module';
import { UsersModule } from './routes/users/users.module';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
