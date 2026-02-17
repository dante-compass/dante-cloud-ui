import { Entity } from '@herodotus-cloud/core';
import { DeleteDomain, SseCustomerDomain, ChecksumDomain, PutObjectDomain, GrantDomain } from './domain';
interface AbstractArgument extends Entity {
}
interface AbstractBucketArgument extends AbstractArgument {
    bucketName: string;
}
interface AbstractExpectedBucketOwnerArgument extends AbstractBucketArgument {
    expectedBucketOwner?: string;
}
interface AbstractObjectRequestPayerArgument extends AbstractExpectedBucketOwnerArgument {
    requestPayer?: string;
}
interface AbstractObjectArgument extends AbstractObjectRequestPayerArgument {
    objectName: string;
}
interface AbstractObjectVersionArgument extends AbstractObjectArgument {
    versionId?: string;
}
interface AbstractObjectListArgument extends AbstractObjectRequestPayerArgument {
    delimiter?: string;
    encodingType?: string;
    maxKeys?: number;
    prefix?: string;
}
export interface AbstractGetObjectArgument extends AbstractObjectVersionArgument {
    ifMatch?: string;
    ifModifiedSince?: Date;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: Date;
    range?: string;
    responseCacheControl?: string;
    responseContentDisposition?: string;
    responseContentEncoding?: string;
    responseContentLanguage?: string;
    responseContentType?: string;
    responseExpires?: Date;
    sseCustomer?: SseCustomerDomain;
    partNumber?: number;
    checksumMode?: string;
}
export interface CreateBucketArgument extends AbstractBucketArgument {
    grantDetails?: GrantDomain;
    objectLockEnabled?: boolean;
    objectOwnership?: string;
}
export interface DeleteBucketArgument extends AbstractExpectedBucketOwnerArgument {
}
export interface ListBucketsArgument extends AbstractArgument {
    maxBuckets?: number;
    continuationToken?: string;
    prefix?: string;
    bucketRegion?: string;
}
export interface PutBucketPolicyArgument extends AbstractExpectedBucketOwnerArgument {
    doesPublic: boolean;
    contentMD5?: string;
    checksumAlgorithm?: string;
    confirmRemoveSelfBucketAccess?: string;
}
export interface DeleteObjectArgument extends AbstractObjectVersionArgument {
    mfa?: string;
    bypassGovernanceRetention?: boolean;
}
export interface DeleteObjectsArgument extends AbstractObjectRequestPayerArgument {
    delete: Array<DeleteDomain>;
    quiet?: boolean;
    mfa?: string;
    bypassGovernanceRetention?: boolean;
    checksumAlgorithm?: string;
}
export interface ListObjectsV2Argument extends AbstractObjectListArgument {
    continuationToken?: string;
    fetchOwner?: boolean;
    startAfter?: string;
}
export interface ListObjectVersionsArgument extends AbstractObjectListArgument {
    keyMarker?: string;
    versionIdMarker?: string;
}
export interface GetObjectArgument extends AbstractGetObjectArgument {
}
export interface GetObjectAttributesArgument extends AbstractObjectVersionArgument {
    maxParts?: string;
    partNumberMarker?: string;
}
export interface PutObjectArgument extends AbstractObjectArgument {
    acl?: string;
    checksumAlgorithm?: string;
    grantFullControl?: string;
    grantRead?: string;
    grantReadACP?: string;
    grantWriteACP?: string;
    websiteRedirectLocation?: string;
    tagging?: string;
    checksum?: ChecksumDomain;
    metadata?: PutObjectDomain;
}
export interface PutObjectLegalHoldArgument extends AbstractObjectVersionArgument {
    legalHoldEnabled?: boolean;
}
export interface PutObjectRetentionArgument extends AbstractObjectVersionArgument {
    retentionMode?: string;
    retainUntilDate: string;
}
export interface CreateMultipartUploadArgument extends PutObjectArgument {
}
export interface AbortMultipartUploadArgument extends AbstractObjectArgument {
    uploadId: string;
}
export interface CompleteMultipartUploadArgument extends AbortMultipartUploadArgument {
}
export {};
