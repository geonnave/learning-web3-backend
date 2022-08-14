# Aprendendo web3 - polichain

Primeiro passo: crie um arquivo .env com as seguintes informações:

```bash
# conta no etherscan
ETHERSCAN_APIKEY=

# conta no infura
INFURA_PROJECT_ID=

# 12 palavras da wallet metamask para dev (use uma wallet separada só pra desenvolvimento)
DEV_MNEMONIC=
```

Instalar hardhat: `npm install --save-dev hardhat` 

Operando na blockchain local:
- Rodar blockchain: `npx hardhat node` 
- Abrir REPL: `npx hardhat console --network local`
- Fazer deploy: `npx hardhat run ./scripts/deploy.js --network local`

Operando na kovan, com a task `deploylock`:
- `npx hardhat deploylock --network kovan –time 1000`

Rodar testes: `npx hardhat test`

## Verificação
Verificar: `npx hardhat verify --network kovan <endereco contrato> <parametro submetido>`

Por exemplo: 
- `npx hardhat verify --network kovan 0x220B768b808dc2a17020c67dAc59f987297c21ad 16604902111000`
- https://kovan.etherscan.io/address/0x220B768b808dc2a17020c67dAc59f987297c21ad#code
