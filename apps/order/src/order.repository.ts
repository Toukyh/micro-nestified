import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Order } from './schema/order.schema';
import { Connection, Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
  protected readonly logger = new Logger(OrdersRepository.name);

  constructor(
    @InjectModel(Order.name) OrderModel: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(OrderModel, connection);
  }
}
