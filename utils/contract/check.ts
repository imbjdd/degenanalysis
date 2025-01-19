import { ethers } from "ethers";

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

export async function check(contractAddress:string) {
  const provider = new ethers.JsonRpcProvider(process.env.INFURA_KEY);

  const result: Result = {
    code: ''
  }

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

  return result
}