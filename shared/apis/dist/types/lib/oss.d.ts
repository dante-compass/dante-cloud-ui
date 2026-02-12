import { CreateMultipartUploadArgument, CreateMultipartUploadBusiness, CompleteMultipartUploadArgument, CompleteMultipartUploadResult, CreateBucketArgument, DeleteBucketArgument, DeleteObjectArgument, DeleteObjectsArgument, ListObjectsV2Argument, GetObjectAttributesArgument, GetObjectArgument, PutBucketPolicyArgument, PutObjectLegalHoldArgument, PutObjectRetentionArgument, CreateBucketResult, DeleteBucketResult, DeleteObjectResult, DeleteObjectsResult, ListObjectsV2Result, ListBucketDetailsResult, PutObjectResult, GetObjectAttributesResult, PutBucketPolicyResult, PutObjectLegalHoldResult, PutObjectRetentionResult } from '../declarations';
import { AxiosHttpResult, AxiosProgressEvent, Service, HttpConfig } from '@herodotus-cloud/core';
declare class BucketService extends Service {
    private static instance;
    private constructor();
    static getInstance(config: HttpConfig): BucketService;
    getBaseAddress(): string;
    private getListAddress;
    private getPolicyAddress;
    listBuckets(): Promise<AxiosHttpResult<ListBucketDetailsResult>>;
    createBucket(request: CreateBucketArgument): Promise<AxiosHttpResult<CreateBucketResult>>;
    deleteBucket(request: DeleteBucketArgument): Promise<AxiosHttpResult<DeleteBucketResult>>;
    setBucketPolicy(request: PutBucketPolicyArgument): Promise<AxiosHttpResult<PutBucketPolicyResult>>;
}
declare class ObjectService extends Service {
    private static instance;
    private constructor();
    static getInstance(config: HttpConfig): ObjectService;
    getBaseAddress(): string;
    private getListV2Address;
    private getMultiDeleteAddress;
    private getDownloadAddress;
    private getDisplayAddress;
    private getUploadAddress;
    private getAttributesAddress;
    private getLegalHoldAddress;
    private getRetentionAddress;
    listObjectsV2(request: ListObjectsV2Argument): Promise<AxiosHttpResult<ListObjectsV2Result>>;
    delete(request: DeleteObjectArgument): Promise<AxiosHttpResult<DeleteObjectResult>>;
    upload(bucketName: string, file: File, onProgress?: (progressEvent: AxiosProgressEvent) => void): Promise<AxiosHttpResult<PutObjectResult>>;
    download(request: GetObjectArgument, onProgress?: (progressEvent: AxiosProgressEvent) => void): Promise<AxiosHttpResult<Blob>>;
    display(request: GetObjectArgument): Promise<AxiosHttpResult<Blob>>;
    batchDelete(request: DeleteObjectsArgument): Promise<AxiosHttpResult<DeleteObjectsResult>>;
    fetchObjectAttributes(request: GetObjectAttributesArgument): Promise<AxiosHttpResult<GetObjectAttributesResult>>;
    setObjectLegalHold(request: PutObjectLegalHoldArgument): Promise<AxiosHttpResult<PutObjectLegalHoldResult>>;
    setObjectRetention(request: PutObjectRetentionArgument): Promise<AxiosHttpResult<PutObjectRetentionResult>>;
}
declare class MultipartUploadService extends Service {
    private static instance;
    private constructor();
    static getInstance(config: HttpConfig): MultipartUploadService;
    getBaseAddress(): string;
    getCreateMultipartUploadAddress(): string;
    getCompleteMultipartUploadAddress(): string;
    createChunkUpload(request: CreateMultipartUploadArgument): Promise<AxiosHttpResult<CreateMultipartUploadBusiness>>;
    completeChunkUpload(request: CompleteMultipartUploadArgument): Promise<AxiosHttpResult<CompleteMultipartUploadResult>>;
}
export { BucketService, ObjectService, MultipartUploadService };
