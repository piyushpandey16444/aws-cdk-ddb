import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as apigw from '@aws-cdk/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';


export class AwsCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaPath = 'src/lambda/';
    const lambdaName = 'get-products';

    const fn = new lambda.Function(this, 'sa360-'+ lambdaName + '-dev', {
      functionName:  'sa360-'+ lambdaName + '-dev',
      runtime: lambda.Runtime.PYTHON_3_7,
      handler: 'get-products.get_products',
      code: lambda.Code.fromAsset(lambdaPath)
    });

    const api = new apigw.RestApi(this, 'sa360', {
    restApiName: 'SA360 API',
    description: 'This is my API Gateway from CDK',
    });

    const productDetail = api.root.addResource('product-detail');

    productDetail.addMethod('GET', fn);

    // deployment dynamodb table
    // const table = new dynamodb.Table(this, 'Student', {
    //     partitionKey: { name: 'student_id', type: dynamodb.AttributeType.STRING },
    // });

}
}
