## Environment Setup

- `export SST_STAGE=rudijs && source devOps/.application_env_vars-${SST_STAGE}.sh`

## Secrets

- `sst secret set MySecret abc123 --stage $SST_STAGE`
- Run the Environment setup command again.

## Local Application Development Environment Start

- Start
- `sst dev --stage $SST_STAGE`
- Remove
- `sst remove --stage $SST_STAGE`
