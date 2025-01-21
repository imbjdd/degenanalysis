import { ethers } from "ethers";
import * as fs from 'fs';
import Papa from 'papaparse';
import * as path from 'path';

interface Result {
  code: string;
  isToken?: boolean;
  isCodeSourcePublished?: boolean;
}

async function isERC20(contractAddress:string, provider:any) {
  const abiFragment = [
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)"
  ];

  const contract = new ethers.Contract(contractAddress, abiFragment, provider);

  try {
    await contract.totalSupply();

    return true;
  } catch (error) {
    return false;
  }
}

interface CsvRow {
  Txhash: string;
  ContractAddress: string;
  ContractName: string;
}

const checkTxhashInCsv = async (searchTxhash: string): Promise<CsvRow | null> => {
  const filePath =  path.resolve(process.cwd(), 'data/export-verified-contractaddress-opensource-license.csv');

  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(filePath);
    Papa.parse(fileStream, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        const rows = result.data as CsvRow[];
        const foundRow = rows.find((row) => row.ContractAddress === searchTxhash);
        resolve(foundRow || null);
      },
      error: reject,
    });
  });
};

export async function check(contractAddress:string) {
  const provider = new ethers.JsonRpcProvider(process.env.INFURA_KEY);

  const result: Result = {
    code: ''
  }

  try {
    const code = await provider.getCode(contractAddress);
    if (code === "0x") {
      result.code = 'no_code'
      return result
    } else {
      result.code = code
    }

    const isToken = await isERC20(contractAddress, provider)
    if (isToken === false) {
      result.isToken = false
      return result
    } else {
      result.isToken = true
    }

    const foundRow = await checkTxhashInCsv(contractAddress);
    result.isCodeSourcePublished = foundRow?true:false

    return result
  } catch(e) {
    return result
  }
}