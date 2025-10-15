import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { ProjectModule } from './project/project.module';
import { BoardModule } from './board/board.module';
import { TaskModule } from './task/task.module';
import { CommentModule } from './comment/comment.module';
import { TimeModule } from './time/time.module';
import { CalendarModule } from './calendar/calendar.module';
import { SearchModule } from './search/search.module';
import { NotificationModule } from './notification/notification.module';
import { RealtimeModule } from './realtime/realtime.module';
import { FileModule } from './file/file.module';
import { AuditModule } from './audit/audit.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: configService.get<string>('NODE_ENV') !== 'production', // Set to false in production
      }),
    }),
    AuthModule,
    UserModule,
    WorkspaceModule,
    ProjectModule,
    BoardModule,
    TaskModule,
    CommentModule,
    TimeModule,
    CalendarModule,
    SearchModule,
    NotificationModule,
    RealtimeModule,
    FileModule,
    AuditModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
