#!/bin/bash

# Usage
# export SST_STAGE=rudijs && source devOps/.application_env_vars-${SST_STAGE}.sh

# Application environment variables
export AWS_REGION=ap-southeast-1 # this var is also set in sst.config.ts

# Console Outputs

echo "Application environment variables for stage: $SST_STAGE"
env | grep 'SST_\|AWS_' 

echo "Applicaton Secrets for stage: $SST_STAGE"
sst secret list --stage $SST_STAGE
