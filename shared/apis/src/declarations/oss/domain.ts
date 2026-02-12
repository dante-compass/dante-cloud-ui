import type { Entity, Conditions } from '@herodotus-cloud/core';

export interface DeleteDomain extends Entity {
  objectName: string;
  versionId?: string;
}

export interface BucketDomain extends Entity {
  /**
   * 存储桶名称
   */
  bucketName: string;
  /**
   * 存储桶创建时间
   */
  creationDate: Date;
}

export interface BucketDetailsDomain extends Entity {
  bucketName: string;
  creationDate: Date;
  bucketRegion: string;
  doesPublic: boolean;
  versioning: string;
  objectLockEnabled: boolean;
}

export interface OwnerDomain extends Entity {
  /**
   * 所有者 ID
   */
  id: string;
  /**
   * 所有者显示名称
   */
  displayName: string;
}

export interface DeletedObjectDomain extends DeleteDomain {
  deleteMarker?: boolean;
  deleteMarkerVersionId?: string;
}

export interface S3ErrorDomain extends DeleteDomain {
  code: string;
  message: string;
}

export interface RestoreStatusDomain extends Entity {
  isRestoreInProgress: boolean;
  restoreExpiryDate: Date;
}

export interface ObjectDomain extends Entity {
  objectName: string;
  lastModified: Date;
  eTag: string;
  checksumAlgorithm: Array<string>;
  size: number;
  storageClass: string;
  owner: OwnerDomain;
  restoreStatus: RestoreStatusDomain;
  isDir: boolean;
}

export interface SseCustomerDomain extends Entity {
  sseCustomerAlgorithm: string;
  sseCustomerKey: string;
  sseCustomerKeyMD5: string;
}

export interface SsekmsDomain extends SseCustomerDomain {
  ssekmsKeyId: string;
  ssekmsEncryptionContext: string;
}

export interface ChecksumDomain extends Entity {
  checksumCRC32: string;
  checksumCRC32C: string;
  checksumSHA1: string;
  checksumSHA256: string;
}

export interface ObjectLockDomain extends Entity {
  objectLockMode: string;
  objectLockRetainUntilDate: Date;
  objectLockLegalHoldStatus: string;
}

export interface PutObjectDomain extends Entity {
  cacheControl: string;
  contentDisposition: string;
  contentEncoding: string;
  contentLanguage: string;
  contentLength: string;
  contentRange: string;
  contentType: string;
  expires: Date;
  metadata: Map<string, string>;
  serverSideEncryption: string;
  storageClass: string;
  ssekms: SsekmsDomain;
  bucketKeyEnabled: boolean;
  objectLock?: ObjectLockDomain;
}

export interface GrantDomain extends Entity {
  acl: string;
  grantFullControl: string;
  grantRead: string;
  grantReadACP: string;
  grantWrite: string;
  grantWriteACP: string;
}

export type BucketDetailsDomainProps = keyof BucketDetailsDomain;
export type ObjectDomainProps = keyof ObjectDomain;
export interface BucketDetailsDomainConditions extends Conditions {}
export interface ObjectDomainConditions extends Conditions {}
