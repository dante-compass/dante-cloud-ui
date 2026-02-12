import { Entity } from '@herodotus-cloud/core';
import { BucketDomain, OwnerDomain, DeletedObjectDomain, S3ErrorDomain, ObjectDomain, SsekmsDomain, ChecksumDomain, BucketDetailsDomain } from './domain';
interface AbstractResult extends Entity {
    cloudFrontId: string;
    extendedRequestId: string;
    requestId: string;
    statusText: string;
    statusCode: number;
    successful: boolean;
}
interface AbstractObjectResult extends AbstractResult {
    deleteMarker: boolean;
    versionId: string;
    requestCharged: string;
}
interface AbstractRequestChargedResult extends AbstractResult {
    requestCharged: string;
    bucketKeyEnabled: boolean;
}
interface AbstractBucketKeyResult extends AbstractRequestChargedResult {
    bucketKeyEnabled: boolean;
}
interface AbstractUploadResult extends AbstractBucketKeyResult {
    bucketName: string;
    objectName: string;
}
interface AbstractListBucketsResult extends AbstractResult {
    owner: OwnerDomain;
    continuationToken: string;
    prefix: string;
}
export interface CreateBucketResult extends AbstractResult {
    location: string;
}
export interface DeleteBucketResult extends AbstractResult {
}
export interface ListBucketsResult extends AbstractListBucketsResult {
    buckets: Array<BucketDomain>;
}
export interface ListBucketDetailsResult extends AbstractListBucketsResult {
    buckets: Array<BucketDetailsDomain>;
}
export interface PutBucketPolicyResult extends AbstractResult {
}
export interface DeleteObjectResult extends AbstractObjectResult {
}
export interface DeleteObjectsResult extends AbstractResult {
    deleted: Array<DeletedObjectDomain>;
    requestCharged: string;
    errors: Array<S3ErrorDomain>;
}
export interface ListObjectsV2Result extends AbstractResult {
    isTruncated: boolean;
    contents: Array<ObjectDomain>;
    bucketName: string;
    prefix: string;
    delimiter: string;
    maxKeys: number;
    encodingType: string;
    keyCount: number;
    continuationToken: string;
    nextContinuationToken: string;
    startAfter: string;
    requestCharged: string;
}
export interface GetObjectAttributesResult extends AbstractResult {
    bucketName: string;
    objectName: string;
    lockEnabled: boolean;
    lockLegalHold: boolean;
    retainUntilDate: Date;
    retentionMode: string;
    deleteMarker: boolean;
    lastModified: Date;
    versionId: string;
    eTag: string;
    size: number;
}
export interface PutObjectLegalHoldResult extends AbstractObjectResult {
}
export interface PutObjectRetentionResult extends AbstractObjectResult {
}
export interface UploadPartResult extends AbstractRequestChargedResult {
    serverSideEncryption: string;
    eTag: string;
    checksum: ChecksumDomain;
    ssekms: SsekmsDomain;
}
export interface PutObjectResult extends UploadPartResult {
    expiration: string;
    versionId: string;
}
export interface CompleteMultipartUploadResult extends AbstractUploadResult {
    location: string;
    expiration: string;
    eTag: string;
    checksum: ChecksumDomain;
    serverSideEncryption: string;
    versionId: string;
}
export interface CreateMultipartUploadBusiness extends Entity {
    uploadId: string;
    uploadUrls: Array<string>;
}
export {};
