import { SigningCosmWasmClient, SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { SigningStargateClient, SigningStargateClientOptions } from "@cosmjs/stargate";
import { AppCurrency, Bech32Config, BIP44, ChainInfo, Currency, Keplr } from "@keplr-wallet/types";
import WalletConnect from "@walletconnect/client";
import { AxiosRequestConfig } from "axios";
import { ReactNode } from "react";
export interface IKeplrWalletConnectV1 extends Keplr {
    dontOpenAppOnEnable: boolean;
}
export declare type WalletClient = Keplr | IKeplrWalletConnectV1;
export declare enum WalletType {
    Keplr = "keplr",
    WalletConnectKeplr = "walletconnect_keplr"
}
export interface Wallet {
    type: WalletType;
    name: string | ReactNode;
    install?: string | ReactNode;
    installURL?: string;
    description: string | ReactNode;
    imageUrl: string;
    getClient: (chainInfo: ChainInfo, walletConnect?: WalletConnect) => Promise<WalletClient | undefined>;
    getOfflineSignerFunction: (client: WalletClient) => (chainId: string) => OfflineSigner | Promise<OfflineSigner>;
}
export declare type WalletChainInfo = ChainInfo;
export declare type WalletSigningCosmWasmClient = SigningCosmWasmClient;
export declare type WalletSigningStargateClient = SigningStargateClient;
export interface ConnectedWallet {
    wallet: Wallet;
    walletClient: WalletClient;
    chainInfo: ChainInfo;
    offlineSigner: OfflineSigner;
    name: string;
    address: string;
    walletBalances: BalancesResponse | undefined;
    signingCosmWasmClient: WalletSigningCosmWasmClient;
    signingStargateClient: WalletSigningStargateClient;
}
export interface AssetResponse {
    denom: string;
    amount: string;
}
export interface Pagination {
    next_key: null | number;
    total: string;
}
export interface BalancesResponse {
    balances?: AssetResponse[];
    pagination: Pagination;
}
export interface IEnableMeta {
    text: string | ReactNode;
    textClassName: string;
    buttonText: string | ReactNode;
    buttonClassName: string;
    contentClassName: string;
}
export interface ChainInfoOptions {
    rpc: string;
    rpcConfig?: AxiosRequestConfig;
    rest: string;
    restConfig?: AxiosRequestConfig;
    chainId?: string;
    chainName?: string;
    stakeCurrency?: Currency;
    walletUrl?: string;
    walletUrlForStaking?: string;
    bip44?: BIP44;
    alternativeBIP44s?: BIP44[];
    bech32Config?: Bech32Config;
    currencies?: AppCurrency[];
    feeCurrencies?: Currency[];
    coinType?: number;
    gasPriceStep?: {
        low: number;
        average: number;
        high: number;
    };
    features?: string[];
    beta?: boolean;
}
export declare type IWalletMetaOverride = {
    [key in WalletType]?: IWalletMeta;
};
export declare type ChainInfoOverrides = {
    [key in ChainInfoID]?: ChainInfoOptions;
};
export interface IWalletMeta {
    description?: string | ReactNode;
    imageUrl?: string;
    name?: string | ReactNode;
    install?: string | ReactNode;
    installURL?: string;
}
export declare type SigningClientGetter<T> = (chainInfo: ChainInfo) => T | Promise<T | undefined> | undefined;
export interface IWalletManagerContext {
    connect: () => void;
    disconnect: () => Promise<void>;
    connectedWallet?: ConnectedWallet;
    status: WalletConnectionStatus;
    connected: boolean;
    error?: unknown;
    isEmbeddedKeplrMobileWeb: boolean;
    chainInfoOverrides?: ChainInfoOverrides;
    getSigningCosmWasmClientOptions?: SigningClientGetter<SigningCosmWasmClientOptions>;
    getSigningStargateClientOptions?: SigningClientGetter<SigningStargateClientOptions>;
}
export interface ModalClassNames {
    modalContent?: string;
    modalOverlay?: string;
    modalHeader?: string;
    modalSubheader?: string;
    modalCloseButton?: string;
    walletList?: string;
    wallet?: string;
    walletImage?: string;
    walletInfo?: string;
    walletName?: string;
    walletDescription?: string;
    textContent?: string;
}
export declare enum WalletConnectionStatus {
    Initializing = 0,
    AttemptingAutoConnection = 1,
    ReadyForConnection = 2,
    Connecting = 3,
    Connected = 4,
    Resetting = 5,
    Errored = 6
}
export declare type UseWalletResponse = Partial<ConnectedWallet> & Pick<IWalletManagerContext, "status" | "connected" | "error">;
export declare enum ChainInfoID {
    Osmosis1 = "osmosis-1",
    OsmosisTestnet = "osmo-test-4",
    Cosmoshub4 = "cosmoshub-4",
    Columbus5 = "columbus-5",
    Secret4 = "secret-4",
    Akashnet2 = "akashnet-2",
    Regen1 = "regen-1",
    Sentinelhub2 = "sentinelhub-2",
    Core1 = "core-1",
    Irishub1 = "irishub-1",
    CryptoOrgChainMainnet1 = "crypto-org-chain-mainnet-1",
    IovMainnetIbc = "iov-mainnet-ibc",
    Emoney3 = "emoney-3",
    Juno1 = "juno-1",
    Uni3 = "uni-3",
    Mars1 = "mars-1",
    MarsAres1 = "ares-1",
    Microtick1 = "microtick-1",
    LikecoinMainnet2 = "likecoin-mainnet-2",
    Impacthub3 = "impacthub-3",
    Bitcanna1 = "bitcanna-1",
    Bitsong2b = "bitsong-2b",
    Kichain2 = "kichain-2",
    Panacea3 = "panacea-3",
    Bostrom = "bostrom",
    Comdex1 = "comdex-1",
    CheqdMainnet1 = "cheqd-mainnet-1",
    Stargaze1 = "stargaze-1",
    Chihuahua1 = "chihuahua-1",
    LumNetwork1 = "lum-network-1",
    Vidulum1 = "vidulum-1",
    DesmosMainnet = "desmos-mainnet",
    Dig1 = "dig-1",
    Sommelier3 = "sommelier-3",
    Sifchain1 = "sifchain-1",
    LaoziMainnet = "laozi-mainnet",
    Darchub = "darchub",
    Umee1 = "umee-1",
    GravityBridge3 = "gravity-bridge-3",
    Mainnet3 = "mainnet-3",
    Shentu22 = "shentu-2.2",
    Carbon1 = "carbon-1",
    Injective1 = "injective-1",
    CerberusChain1 = "cerberus-chain-1",
    Fetchhub4 = "fetchhub-4",
    Mantle1 = "mantle-1",
    PioMainnet1 = "pio-mainnet-1",
    Galaxy1 = "galaxy-1",
    Meme1 = "meme-1",
    Evmos_9001_2 = "evmos_9001-2",
    Phoenix1 = "phoenix-1",
    Titan1 = "titan-1",
    Kava_2222_10 = "kava_2222-10",
    Genesis_29_2 = "genesis_29-2"
}
//# sourceMappingURL=types.d.ts.map