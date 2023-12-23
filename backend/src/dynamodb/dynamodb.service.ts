import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class DynamoDBService {
  private readonly dynamoDB: AWS.DynamoDB.DocumentClient;

  constructor() {
    AWS.config.update({
      region: 'local',
      accessKeyId: 'fakeMyKeyId',
      secretAccessKey: 'fakeSecretAccessKey',
    });

    this.dynamoDB = new AWS.DynamoDB.DocumentClient({
      endpoint: 'http://localhost:8000', // use DynamoDB on local instance
    });
  }
}
