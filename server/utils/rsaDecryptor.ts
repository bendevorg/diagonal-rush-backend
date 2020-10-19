/**
 * Module to decrypt data using rsa
 * @module utils/rsaDecryptor
 */
import NodeRSA from 'node-rsa';
import { isValidJSON } from './validator';
import { IToken } from '../interfaces/device';

export default (encryptedData: string, key: string): IToken | false => {
  try {
    const rsa = new NodeRSA(key);
    const decryptedData = rsa.decrypt(encryptedData, 'utf8');

    if (!isValidJSON(decryptedData)) {
      return false;
    }

    return JSON.parse(decryptedData);
  } catch (err) {
    return false;
  }
};
