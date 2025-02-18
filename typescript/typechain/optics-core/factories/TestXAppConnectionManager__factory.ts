/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestXAppConnectionManager,
  TestXAppConnectionManagerInterface,
} from "../TestXAppConnectionManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "replica",
        type: "address",
      },
    ],
    name: "ReplicaEnrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "replica",
        type: "address",
      },
    ],
    name: "ReplicaUnenrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "access",
        type: "bool",
      },
    ],
    name: "WatcherPermissionSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "domainToReplica",
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
    name: "home",
    outputs: [
      {
        internalType: "contract Home",
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
        internalType: "address",
        name: "_replica",
        type: "address",
      },
    ],
    name: "isReplica",
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
        internalType: "address",
        name: "_replica",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "ownerEnrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
    ],
    name: "ownerUnenrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "replicaToDomain",
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
        internalType: "address",
        name: "_home",
        type: "address",
      },
    ],
    name: "setHome",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "_access",
        type: "bool",
      },
    ],
    name: "setWatcherPermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "testRecoverWatcherFromSig",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_updater",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "unenrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "watcherPermission",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6115828061007d6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063b9cff16211610066578063b9cff1621461039d578063e0e7a913146103c0578063f2fde38b14610478578063f31faefb146104ab576100f5565b80638da5cb5b146103135780638f5d90e01461031b578063916c34701461034e5780639fa92f9d14610395576100f5565b80635f8b1dba116100d35780635f8b1dba146102825780636ef0f37f146102ce578063715018a6146103035780638d3638f41461030b576100f5565b806323738500146100fa578063427ebef5146101fc5780635190bc531461024f575b600080fd5b6101d36004803603608081101561011057600080fd5b63ffffffff8235169173ffffffffffffffffffffffffffffffffffffffff60208201358116926040830135909116919081019060808101606082013564010000000081111561015e57600080fd5b82018360208201111561017057600080fd5b8035906020019184600183028401116401000000008311171561019257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104ea945050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61023b6004803603604081101561021257600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013563ffffffff16610511565b604080519115158252519081900360200190f35b61023b6004803603602081101561026557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610551565b6102b56004803603602081101561029857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610581565b6040805163ffffffff9092168252519081900360200190f35b610301600480360360208110156102e457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610599565b005b610301610688565b6102b561079f565b6101d361083b565b6103016004803603602081101561033157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610857565b6103016004803603606081101561036457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169063ffffffff6020820135169060400135151561090b565b6101d3610a59565b6101d3600480360360208110156103b357600080fd5b503563ffffffff16610a75565b610301600480360360608110156103d657600080fd5b63ffffffff8235169160208101359181019060608101604082013564010000000081111561040357600080fd5b82018360208201111561041557600080fd5b8035906020019184600183028401116401000000008311171561043757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a9d945050505050565b6103016004803603602081101561048e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610d16565b610301600480360360408110156104c157600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013563ffffffff16610eb7565b6000610508856104f98661102b565b6105028661102b565b85611044565b95945050505050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260046020908152604080832063ffffffff8516845290915290205460ff1692915050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205463ffffffff16151590565b60026020526000908152604090205463ffffffff1681565b6105a161113a565b73ffffffffffffffffffffffffffffffffffffffff166105bf61083b565b73ffffffffffffffffffffffffffffffffffffffff161461064157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61069061113a565b73ffffffffffffffffffffffffffffffffffffffff166106ae61083b565b73ffffffffffffffffffffffffffffffffffffffff161461073057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600154604080517f8d3638f4000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691638d3638f4916004808301926020929190829003018186803b15801561080a57600080fd5b505afa15801561081e573d6000803e3d6000fd5b505050506040513d602081101561083457600080fd5b5051905090565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b61085f61113a565b73ffffffffffffffffffffffffffffffffffffffff1661087d61083b565b73ffffffffffffffffffffffffffffffffffffffff16146108ff57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6109088161113e565b50565b61091361113a565b73ffffffffffffffffffffffffffffffffffffffff1661093161083b565b73ffffffffffffffffffffffffffffffffffffffff16146109b357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8316600081815260046020908152604080832063ffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815194855291840191909152805191927f517de16b526853f481451c5151e87484e1b251ec7d0302efa1019c2ece179c2c929081900390910190a2505050565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b63ffffffff831660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1680610b3557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f217265706c696361206578697374730000000000000000000000000000000000604482015290519081900360640190fd5b610b3e83611206565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663df034cd06040518163ffffffff1660e01b815260040160206040518083038186803b158015610b9a57600080fd5b505afa158015610bae573d6000803e3d6000fd5b505050506040513d6020811015610bc457600080fd5b505173ffffffffffffffffffffffffffffffffffffffff1614610c4857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f2163757272656e74207570646174657200000000000000000000000000000000604482015290519081900360640190fd5b6000610c5e85610c578461102b565b8686611044565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260046020908152604080832063ffffffff8a16845290915290205490915060ff16610d0657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f2176616c69642077617463686572000000000000000000000000000000000000604482015290519081900360640190fd5b610d0f8261113e565b5050505050565b610d1e61113a565b73ffffffffffffffffffffffffffffffffffffffff16610d3c61083b565b73ffffffffffffffffffffffffffffffffffffffff1614610dbe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610e2a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806114e36026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610ebf61113a565b73ffffffffffffffffffffffffffffffffffffffff16610edd61083b565b73ffffffffffffffffffffffffffffffffffffffff1614610f5f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610f688261113e565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260026020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff8716908117909155808452600383529281902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168517905580519384525191927f8440df9bf8a8542634a9eb196da1735b786ed9aa2fc12b080ac34c5fa81a9234929081900390910190a25050565b73ffffffffffffffffffffffffffffffffffffffff1690565b60008061105085611206565b73ffffffffffffffffffffffffffffffffffffffff166345630b1a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561109557600080fd5b505afa1580156110a9573d6000803e3d6000fd5b505050506040513d60208110156110bf57600080fd5b50516040805160208181018490527fffffffff0000000000000000000000000000000000000000000000000000000060e08b901b16828401526044808301899052835180840390910181526064909201909252805191012090915061112381611209565b905061112f818561125a565b979650505050505050565b3390565b73ffffffffffffffffffffffffffffffffffffffff81166000818152600260208181526040808420805463ffffffff168086526003845282862080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690559486905292825282547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001690925581519384529051919283927fce1533133fb359ace801d3176bbad25ace030d714aed35e38a6293c8a60b115b929181900390910190a25050565b90565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b600081516041146112cc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a6112ea868285856112f4565b9695505050505050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082111561136f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806115096022913960400191505060405180910390fd5b8360ff16601b148061138457508360ff16601c145b6113d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061152b6022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611435573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661050857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c7565a26469706673582212209e0fa95dc352acb5be9d0ccf7a3826b23e10cd16a88e060088581bd7636088ff64736f6c63430007060033";

export class TestXAppConnectionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestXAppConnectionManager> {
    return super.deploy(overrides || {}) as Promise<TestXAppConnectionManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestXAppConnectionManager {
    return super.attach(address) as TestXAppConnectionManager;
  }
  connect(signer: Signer): TestXAppConnectionManager__factory {
    return super.connect(signer) as TestXAppConnectionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestXAppConnectionManagerInterface {
    return new utils.Interface(_abi) as TestXAppConnectionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestXAppConnectionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestXAppConnectionManager;
  }
}
