import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';


export class AwsCdkLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaPath = 'src/lambda/';
    const lambdaName = 'lambda_handler';

    const fn = new lambda.Function(this, 'sa360-'+ lambdaName + '-dev', {
      functionName: lambdaName + '-dev',
      runtime: lambda.Runtime.PYTHON_3_7,
      handler: 'get-products.lambda_handler',
      code: lambda.Code.fromAsset(lambdaPath)
    //   role: myRole, // user-provided role
    });

    // const myRole = new iam.Role(this, 'My Role', {
    //   assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    // });
        
    // myRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole"));

}
}
