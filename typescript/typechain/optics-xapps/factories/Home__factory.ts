/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Home, HomeInterface } from "../Home";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationAndNonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "committedRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Dispatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "ImproperUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updater",
        type: "address",
      },
    ],
    name: "NewUpdater",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updaterManager",
        type: "address",
      },
    ],
    name: "NewUpdaterManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "updater",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reporter",
        type: "address",
      },
    ],
    name: "UpdaterSlashed",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_MESSAGE_BODY_BYTES",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_messageBody",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "improperUpdate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueEnd",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "setUpdaterManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "suggestUpdate",
    outputs: [
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_new",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updaterManager",
    outputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051612f90380380612f908339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff16612f1d6100736000398061095e5280610aac5280610f8452806115c45250612f1d6000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80639d54f419116100ee578063c4d66de811610097578063f2fde38b11610071578063f2fde38b146105be578063f6d16102146105f1578063fa31de01146105f9578063fd54b228146106b1576101a3565b8063c4d66de81461057b578063df034cd0146105ae578063ebf0c717146105b6576101a3565b8063b31c01fb116100c8578063b31c01fb1461047d578063b95a20011461052f578063c19d93fb14610552576101a3565b80639d54f4191461043a5780639df6c8e11461046d578063ab91c7b014610475576101a3565b806367a6771d116101505780638da5cb5b1161012a5780638da5cb5b146103245780638e4e30e0146103555780639776120e14610407576101a3565b806367a6771d146102f3578063715018a6146102fb5780638d3638f414610303576101a3565b806336e104de1161018157806336e104de146102c257806345630b1a146102e3578063522ae002146102eb576101a3565b806306661abd146101a857806319d9d21a146101c25780632bef289214610291575b600080fd5b6101b06106b9565b60408051918252519081900360200190f35b61028f600480360360a08110156101d857600080fd5b81359160208101918101906080810160608201356401000000008111156101fe57600080fd5b82018360208201111561021057600080fd5b8035906020019184600183028401116401000000008311171561023257600080fd5b91939092909160208101903564010000000081111561025057600080fd5b82018360208201111561026257600080fd5b8035906020019184600183028401116401000000008311171561028457600080fd5b5090925090506106bf565b005b6102ae600480360360208110156102a757600080fd5b503561091c565b604080519115158252519081900360200190f35b6102ca61092f565b6040805192835260208301919091528051918290030190f35b6101b0610957565b6101b0610987565b6101b061098d565b61028f610993565b61030b610aaa565b6040805163ffffffff9092168252519081900360200190f35b61032c610ace565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102ae6004803603606081101561036b57600080fd5b81359160208101359181019060608101604082013564010000000081111561039257600080fd5b8201836020820111156103a457600080fd5b803590602001918460018302840111640100000000831117156103c657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610aea945050505050565b61028f6004803603602081101561041d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610d3d565b61028f6004803603602081101561045057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610df1565b61032c610e81565b6101b0610e9e565b61028f6004803603606081101561049357600080fd5b8135916020810135918101906060810160408201356401000000008111156104ba57600080fd5b8201836020820111156104cc57600080fd5b803590602001918460018302840111640100000000831117156104ee57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610eaa945050505050565b61030b6004803603602081101561054557600080fd5b503563ffffffff16611048565b61055a611061565b6040518082600281111561056a57fe5b815260200191505060405180910390f35b61028f6004803603602081101561059157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611082565b61032c611295565b6101b06112b1565b61028f600480360360208110156105d457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166112bd565b6101b061145f565b61028f6004803603606081101561060f57600080fd5b63ffffffff8235169160208101359181019060608101604082013564010000000081111561063c57600080fd5b82018360208201111561064e57600080fd5b8035906020019184600183028401116401000000008311171561067057600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061146b945050505050565b6101b06116e1565b60205490565b600260865474010000000000000000000000000000000000000000900460ff1660028111156106ea57fe5b141561075757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f860181900481028201810190925284815261079991889188359188908890819084018382808284376000920191909152506116e792505050565b80156107e857506107e886866001602002013584848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506116e792505050565b80156107f957508435602086013514155b1561091457610806611779565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b6000610929605383611855565b92915050565b60008061093c60536118c5565b156109535760875491506109506053611905565b90505b9091565b60006109827f0000000000000000000000000000000000000000000000000000000000000000611942565b905090565b61080081565b60875481565b61099b6119b7565b73ffffffffffffffffffffffffffffffffffffffff166109b9610ace565b73ffffffffffffffffffffffffffffffffffffffff1614610a3b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60e95460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360e980547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b60e95473ffffffffffffffffffffffffffffffffffffffff1690565b6000600260865474010000000000000000000000000000000000000000900460ff166002811115610b1757fe5b1415610b8457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610b8f8484846116e7565b610bfa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2175706461746572207369670000000000000000000000000000000000000000604482015290519081900360640190fd5b6087548414610c6a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420612063757272656e7420757064617465000000000000000000000000604482015290519081900360640190fd5b610c75605384611855565b610d3257610c81611779565b7f6844fd5e21c932b5197b78ac11bf96e2eaa4e882dd0c88087060cf2065c04ab28484846040518084815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610cee578181015183820152602001610cd6565b50505050905090810190601f168015610d1b5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1506001610d36565b5060005b9392505050565b610d456119b7565b73ffffffffffffffffffffffffffffffffffffffff16610d63610ace565b73ffffffffffffffffffffffffffffffffffffffff1614610de557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610dee816119bb565b50565b61011c5473ffffffffffffffffffffffffffffffffffffffff163314610e7857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f21757064617465724d616e616765720000000000000000000000000000000000604482015290519081900360640190fd5b610dee81611aa9565b61011c5473ffffffffffffffffffffffffffffffffffffffff1681565b600061098260536118c5565b600260865474010000000000000000000000000000000000000000900460ff166002811115610ed557fe5b1415610f4257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610f4d838383610aea565b15610f5757611043565b6000610f636053611b22565b905082811415610f735750610f79565b50610f57565b8160878190555081837f000000000000000000000000000000000000000000000000000000000000000063ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2846040518080602001828103825283818151815260200191508051906020019080838360005b83811015611008578181015183820152602001610ff0565b50505050905090810190601f1680156110355780820380516001836020036101000a031916815260200191505b509250505060405180910390a45b505050565b61011b6020526000908152604090205463ffffffff1681565b60865474010000000000000000000000000000000000000000900460ff1681565b605254610100900460ff168061109b575061109b611c5b565b806110a9575060525460ff16155b6110fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e98602e913960400191505060405180910390fd5b605254610100900460ff1615801561116457605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b61116c611c6c565b611175826119bb565b61011c54604080517fdf034cd0000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163df034cd0916004808301926020929190829003018186803b1580156111e157600080fd5b505afa1580156111f5573d6000803e3d6000fd5b505050506040513d602081101561120b57600080fd5b5051905061121881611d8f565b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a150801561129157605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b60865473ffffffffffffffffffffffffffffffffffffffff1681565b60006109826000611f24565b6112c56119b7565b73ffffffffffffffffffffffffffffffffffffffff166112e3610ace565b73ffffffffffffffffffffffffffffffffffffffff161461136557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166113d1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612e506026913960400191505060405180910390fd5b60e95460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360e980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006109826053611905565b600260865474010000000000000000000000000000000000000000900460ff16600281111561149657fe5b141561150357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b6108008151111561157557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6d736720746f6f206c6f6e670000000000000000000000000000000000000000604482015290519081900360640190fd5b63ffffffff808416600090815261011b602052604081208054808416600181019094167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009091161790556115ed7f00000000000000000000000000000000000000000000000000000000000000003384888888611f37565b8051602082012090915061160260008261200d565b61161561160d6112b1565b605390612115565b506116208684612182565b67ffffffffffffffff1660016116346106b9565b03827f9d4c83d2e57d7d381feb264b44a5015e7f9ef26340f4fc46b558a6dc16dd811a608754866040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561169e578181015183820152602001611686565b50505050905090810190601f1680156116cb5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a4505050505050565b60205481565b6000806116f2610957565b85856040516020018084815260200183815260200182815260200193505050506040516020818303038152906040528051906020012090506117338161219c565b60865490915073ffffffffffffffffffffffffffffffffffffffff1661175982856121ed565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b611781612287565b61011c54604080517f5b3c2cbf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff90921691635b3c2cbf9160248082019260009290919082900301818387803b1580156117f457600080fd5b505af1158015611808573d6000803e3d6000fd5b505060865460405133935073ffffffffffffffffffffffffffffffffffffffff90911691507f98064af315f26d7333ba107ba43a128ec74345f4d4e6f2549840fe092a1c8bce90600090a3565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff168111610d325760008181526001850160205260409020548314156118bd576001915050610929565b60010161186d565b80546000906fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811691166118fd82826122c8565b949350505050565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b3390565b6119c4816122e2565b611a2f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f21636f6e747261637420757064617465724d616e616765720000000000000000604482015290519081900360640190fd5b61011c805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f958d788fb4c373604cd4c73aa8c592de127d0819b49bb4dc02c8ecd666e965bf9181900360200190a150565b6086805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a150565b80546000906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116611b5a82826122c8565b611bc557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6fffffffffffffffffffffffffffffffff8116600090815260018501602052604090205492508215611c16576fffffffffffffffffffffffffffffffff811660009081526001850160205260408120555b83547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166001919091016fffffffffffffffffffffffffffffffff1617909255919050565b6000611c66306122e2565b15905090565b605254610100900460ff1680611c855750611c85611c5b565b80611c93575060525460ff16155b611ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e98602e913960400191505060405180910390fd5b605254610100900460ff16158015611d4e57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611d566122e8565b611d5e6123fa565b8015610dee57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b605254610100900460ff1680611da85750611da8611c5b565b80611db6575060525460ff16155b611e0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e98602e913960400191505060405180910390fd5b605254610100900460ff16158015611e7157605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611e7961258a565b608680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416177fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055801561129157605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b600061092982611f32612676565b612b37565b6060868686868686604051602001808763ffffffff1660e01b81526004018681526020018563ffffffff1660e01b81526004018463ffffffff1660e01b815260040183815260200182805190602001908083835b60208310611fc857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611f8b565b6001836020036101000a038019825116818451168082178552505050505050905001965050505050505060405160208183030381529060405290509695505050505050565b602082015463ffffffff1161208357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6d65726b6c6520747265652066756c6c00000000000000000000000000000000604482015290519081900360640190fd5b6020820180546001019081905560005b60208110156121125781600116600114156120bf57828482602081106120b557fe5b0155506112919050565b8381602081106120cb57fe5b01548360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092506002828161210757fe5b049150600101612093565b50fe5b81546fffffffffffffffffffffffffffffffff8082167001000000000000000000000000000000009283900482166001019182169092029190911783558115610929576fffffffffffffffffffffffffffffffff8116600090815260019390930160205260409092205590565b63ffffffff1660209190911b67ffffffff00000000161790565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b6000815160411461225f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a61227d86828585612bf5565b9695505050505050565b608680547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674020000000000000000000000000000000000000000179055565b60019103016fffffffffffffffffffffffffffffffff1690565b3b151590565b605254610100900460ff16806123015750612301611c5b565b8061230f575060525460ff16155b612364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e98602e913960400191505060405180910390fd5b605254610100900460ff16158015611d5e57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790558015610dee57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b605254610100900460ff16806124135750612413611c5b565b80612421575060525460ff16155b612476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e98602e913960400191505060405180910390fd5b605254610100900460ff161580156124dc57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b60006124e66119b7565b60e980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610dee57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b605254610100900460ff16806125a357506125a3611c5b565b806125b1575060525460ff16155b612606576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e98602e913960400191505060405180910390fd5b605254610100900460ff1615801561266c57605280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611d5e6053612dec565b61267e612e30565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b6020811015612bed57600182821c166000868360208110612b5e57fe5b015490508160011415612ba15780856040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209450612be3565b84868460208110612bae57fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012094505b5050600101612b41565b505092915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115612c70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612e766022913960400191505060405180910390fd5b8360ff16601b1480612c8557508360ff16601c145b612cda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612ec66022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612d36573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116612de357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b80546fffffffffffffffffffffffffffffffff16610dee5780547fffffffffffffffffffffffffffffffff0000000000000000000000000000000016600117815550565b604051806104000160405280602090602082028036833750919291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c7565496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565a26469706673582212209136b2e41e5ab8723fb237b362583bdcc56a69455eccb55195497fca9566ba3b64736f6c63430007060033";

export class Home__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Home> {
    return super.deploy(_localDomain, overrides || {}) as Promise<Home>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): Home {
    return super.attach(address) as Home;
  }
  connect(signer: Signer): Home__factory {
    return super.connect(signer) as Home__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HomeInterface {
    return new utils.Interface(_abi) as HomeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Home {
    return new Contract(address, _abi, signerOrProvider) as Home;
  }
}
