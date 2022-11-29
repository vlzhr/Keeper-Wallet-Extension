import { AppAction, AppActionPayload } from '..//types';

export const ACTION = {
  CHANGE_LNG: 'CHANGE_LNG',
  CHANGE_LOCK: 'CHANGE_LOCK',
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  REMOVE_ACCOUNT: 'REMOVE_ACCOUNT',
  SET_CONFIG: 'SET_CONFIG',
  SET_SELECTED_ACCOUNT: 'SET_SELECTED_ACCOUNT',
  CLEAR_MESSAGES: 'CLEAR_MESSAGES',
  APPROVE: 'CONFIRM',
  REJECT: 'REJECT',
  REJECT_FOREVER: 'REJECT_FOREVER',
  REJECT_OK: 'REJECT_OK',
  APPROVE_PENDING: 'APPROVE_PENDING',
  APPROVE_OK: 'APPROVE_OK',
  APPROVE_ERROR: 'APPROVE_ERROR',
  APPROVE_REJECT_CLEAR: 'APPROVE_REJECT_CLEAR',
  UNLOCK: 'UNLOCK',
  LOCK: 'LOCK',
  NEW_ACCOUNT_SELECT: 'NEW_ACCOUNT_SELECT',
  NEW_ACCOUNT_NAME: 'NEW_ACCOUNT_NAME',
  GET_BALANCES: 'GET_BALANCES',
  SELECT_ACCOUNT: 'SELECT_ACCOUNT',
  CHANGE_NODE: 'CHANGE_NODE',
  CHANGE_NETWORK_CODE: 'CHANGE_NETWORK_CODE',
  CHANGE_MATCHER: 'CHANGE_MATCHER',

  UPDATE_FROM_LNG: 'UPDATE_FROM_LNG',
  UPDATE_APP_STATE: 'UPDATE_APP_STATE',
  UPDATE_UI_STATE: 'UPDATE_UI_STATE',
  SET_UI_STATE: 'SET_UI_STATE',
  UPDATE_CURRENT_NETWORK_ACCOUNTS: 'UPDATE_CURRENT_NETWORK_ACCOUNTS',
  UPDATE_ALL_NETWORKS_ACCOUNTS: 'UPDATE_ALL_NETWORKS_ACCOUNTS',
  UPDATE_SELECTED_ACCOUNT: 'UPDATE_SELECTED_ACCOUNT',
  UPDATE_MESSAGES: 'UPDATE_MESSAGES',
  UPDATE_TRANSACTION_FEE: 'UPDATE_TRANSACTION_FEE',
  UPDATE_ACTIVE_MESSAGE: 'UPDATE_ACTIVE_MESSAGE',
  UPDATE_BALANCES: 'UPDATE_BALANCES',
  UPDATE_ADDRESSES: 'UPDATE_ADDRESSES',
  UPDATE_CURRENT_NETWORK: 'UPDATE_CURRENT_NETWORK',
  UPDATE_NETWORKS: 'UPDATE_NETWORKS',
  SET_ASSETS: 'SET_ASSETS',
  SET_USD_PRICES: 'SET_USD_PRICES',
  SET_ASSET_LOGOS: 'SET_ASSET_LOGOS',
  SET_ASSET_TICKERS: 'SET_ASSET_TICKERS',
  FAVORITE_ASSET: 'FAVORITE_ASSET',
  UPDATE_NODES: 'UPDATE_NODES',
  UPDATE_CODES: 'UPDATE_CODES',
  UPDATE_MATCHER: 'UPDATE_MATCHER',
  UPDATE_ORIGINS: 'UPDATE_ORIGINS',
  GET_ASSETS: 'GET_ASSETS',
  UPDATE_ASSETS: 'UPDATE_ASSETS',
  UPDATE_NFTS: 'UPDATE_NFTS',
  CHANGE_ACCOUNT_NAME: 'CHANGE_ACCOUNT_NAME',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  SET_LOADING: 'SET_LOADING',
  NOTIFICATION_DELETE: 'DELETE_ACCOUNT_NOTIFY',
  NOTIFICATION_SELECT: 'SELECT_ACCOUNT_NOTIFY',
  NOTIFICATION_NAME_CHANGED: 'NOTIFICATION_NAME_CHANGED',
  LEDGER_SIGN_REQUESTS_ADD: 'LEDGER_SIGN_REQUESTS_ADD',
  SET_ADDRESS: 'SET_ADDRESS',
  SET_ADDRESSES: 'SET_ADDRESSES',
  REMOVE_ADDRESS: 'REMOVE_ADDRESS',
  UPDATE_FEE_CONFIG: 'UPDATE_FEE_CONFIG',
  UPDATE_NFT_CONFIG: 'UPDATE_NFT_CONFIG',

  PERMISSIONS: {
    DELETE: 'PERMISSIONS.DELETE_ORIGIN',
    ALLOW: 'PERMISSIONS.ALLOW_ORIGIN',
    SET_AUTO: 'PERMISSIONS.ALLOW_AUTO_ORIGIN',
    DISALLOW: 'PERMISSIONS.DISALLOW_ORIGIN',
    PENDING: 'PERMISSIONS.PENDING_ORIGIN',
    CONFIRMED_ALLOW: 'PERMISSIONS.CONFIRMED_ALLOW',
    CONFIRMED_AUTO: 'PERMISSIONS.CONFIRMED_AUTO',
    CONFIRMED_DISALLOW: 'PERMISSIONS.CONFIRMED_DISALLOW',
    CONFIRMED_DELETE: 'PERMISSIONS.CONFIRMED_DELETE',
  },
  REMOTE_CONFIG: {
    SET_CONFIG: 'SET_CONFIG',
    UPDATE_IDLE: 'UPDATE_IDLE',
    SET_IDLE: 'SET_IDLE',
  },
  NOTIFICATIONS: {
    SET: 'NOTIFICATIONS_SET',
    SET_SHOWED: 'NOTIFICATIONS_SET_SHOWED',
    DELETE: 'NOTIFICATIONS_DELETE',
    SET_ACTIVE: 'SET_ACTIVE',
    SET_PERMS: 'SET_PERMS',
  },
  MESSAGES: {
    SET_ACTIVE_AUTO: 'MESSAGES_SET_ACTIVE_AUTO',
    UPDATE_ACTIVE: 'MESSAGES_UPDATE_ACTIVE',
    SET_ACTIVE_MESSAGE: 'SET_ACTIVE_MESSAGE',
    SET_ACTIVE_NOTIFICATION: 'SET_ACTIVE_NOTIFICATION',
  },
} as const;

export const createAction =
  <TActionType extends AppAction['type']>(type: TActionType) =>
  (payload: AppActionPayload<TActionType>) => ({
    type,
    payload,
  });