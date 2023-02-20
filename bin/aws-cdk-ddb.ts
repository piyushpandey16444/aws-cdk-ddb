#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkStack } from '../lib/aws-lambda-stack';

const app = new cdk.App();

// deploying stack
new AwsCdkStack(app, 'AwsCdkStack');
