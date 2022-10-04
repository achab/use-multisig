import { Account } from "hardhat/types";
import { starknet, ethers } from "hardhat";
import { getSelectorFromName } from "starknet/dist/utils/hash";
import { number } from "starknet";

async function main() {
    let deployer = await starknet.deployAccount("OpenZeppelin");
    let first = await starknet.deployAccount("OpenZeppelin");
    let second = await starknet.deployAccount("OpenZeppelin");
    let third = await starknet.deployAccount("OpenZeppelin");

    const MultisigFactory = await starknet.getContractFactory("multisig");
    // const multisigHash = deployer.declare(MultisigFactory);
    const multisig = await MultisigFactory.deploy({ 
        signers: [
            number.toBN(first.address), 
            number.toBN(second.address), 
            number.toBN(third.address)
        ], 
        threshold: 2
    });

    console.log("XXXXXXXXXXXXXX");
    console.log(multisig.address);

    const ExampleFactory = await starknet.getContractFactory("example");
    const example = await MultisigFactory.deploy({ signers: [first.address, second.address, third.address], threshold: 2});

    let selector = BigInt(getSelectorFromName("get_balance"));

    // let res = await multisig.invoke("submit_transaction", {to: example.address, function_selector: selector, calldata: [], nonce: 0});

    console.log("OOOOOOOOOOOOOOO");
    console.log(selector);
    // console.log(res);

}

main();
