#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkDdbStack } from '../lib/aws-cdk-ddb-stack';

const app = new cdk.App();
new AwsCdkDdbStack(app, 'AwsCdkDdbStack');
