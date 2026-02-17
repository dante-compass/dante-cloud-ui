import { Entity } from '@herodotus-cloud/core';
import { BucketDomain, OwnerDomain, DeletedObjectDomain, S3ErrorDomain, ObjectDomain, ObjectVersionDomain, SsekmsDomain, ChecksumDomain, BucketDetailsDomain } from './domain';
interface AbstractResult extends Entity {
    cloudFrontId: string;
    extendedRequestId: string;
    requestId: string;
    statusText: string;
    statusCode: number;
    successful: boolean;
}
interface AbstractObjectRequestChargedResult extends AbstractResult {
    requestCharged: string;
}
interface AbstractBucketNameResult extends AbstractObjectRequestChargedResult {
    bucketName: string;
}
interface AbstractObjectListResult extends AbstractBucketNameResult {
    isTruncated: boolean;
    prefix: string;
    delimiter: string;
    maxKeys: number;
    encodingType: string;
}
interface AbstractObjectETagResult extends AbstractObjectRequestChargedResult {
    eTag: string;
}
interface AbstractObjectVersionIdResult extends AbstractObjectETagResult {
    versionId: string;
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
export interface DeleteObjectResult extends AbstractObjectRequestChargedResult {
    deleteMarker: boolean;
    versionId: string;
}
export interface DeleteObjectsResult extends AbstractObjectRequestChargedResult {
    deleted: Array<DeletedObjectDomain>;
    errors: Array<S3ErrorDomain>;
}
export interface ListObjectsV2Result extends AbstractObjectListResult {
    contents: Array<ObjectDomain>;
    keyCount: number;
    continuationToken: string;
    nextContinuationToken: string;
    startAfter: string;
}
export interface ListObjectVersionsResult extends AbstractObjectListResult {
    versions: Array<ObjectVersionDomain>;
    keyMarker: string;
    versionIdMarker: string;
    nextKeyMarker: string;
    nextVersionIdMarker: string;
}
export interface GetObjectAttributesResult extends AbstractObjectVersionIdResult {
    bucketName: string;
    objectName: string;
    lockEnabled: boolean;
    lockLegalHold: boolean;
    retainUntilDate: string;
    retentionMode: string;
    deleteMarker: boolean;
    lastModified: string;
    size: number;
}
export interface PutObjectLegalHoldResult extends AbstractObjectRequestChargedResult {
}
export interface PutObjectRetentionResult extends AbstractObjectRequestChargedResult {
}
export interface UploadPartResult extends AbstractObjectVersionIdResult {
    serverSideEncryption: string;
    checksum: ChecksumDomain;
    ssekms: SsekmsDomain;
}
export interface PutObjectResult extends UploadPartResult {
    expiration: string;
}
export interface CompleteMultipartUploadResult extends AbstractObjectVersionIdResult {
    location: string;
    expiration: string;
    checksum: ChecksumDomain;
    serverSideEncryption: string;
}
export interface CreateMultipartUploadBusiness extends Entity {
    uploadId: string;
    uploadUrls: Array<string>;
}
export {};
