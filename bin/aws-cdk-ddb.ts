#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkDdbStack } from '../lib/aws-cdk-ddb-stack';
import { AwsCdkLambdaStack } from '../lib/aws-lambda-stack';

const app = new cdk.App();

// deploying DDB stack
const ddbStack = new AwsCdkDdbStack(app, 'AwsCdkDdbStack');

// deploying basic lambda function
const lambdaStack = new AwsCdkLambdaStack(app, 'basicLambdaStack');
