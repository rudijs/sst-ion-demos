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
- `sst secret list --stage $SST_STAGE`
- `sst secret remove MySecret --stage $SST_STAGE`

## DEPLOY

- `sst secret set MySecret abc123 --stage $SST_STAGE`
- `sst deploy --stage $SST_STAGE`
- `sst remove --stage $SST_STAGE`
