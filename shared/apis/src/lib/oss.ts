import type {
  CreateMultipartUploadArgument,
  CreateMultipartUploadBusiness,
  CompleteMultipartUploadArgument,
  CompleteMultipartUploadResult,
  CreateBucketArgument,
  DeleteBucketArgument,
  DeleteObjectArgument,
  DeleteObjectsArgument,
  ListObjectsV2Argument,
  ListObjectVersionsArgument,
  GetObjectAttributesArgument,
  GetObjectArgument,
  PutBucketPolicyArgument,
  PutObjectLegalHoldArgument,
  PutObjectRetentionArgument,
  CreateBucketResult,
  DeleteBucketResult,
  DeleteObjectResult,
  DeleteObjectsResult,
  ListObjectsV2Result,
  ListObjectVersionsResult,
  ListBucketDetailsResult,
  PutObjectResult,
  GetObjectAttributesResult,
  PutBucketPolicyResult,
  PutObjectLegalHoldResult,
  PutObjectRetentionResult,
} from '@/declarations';
import type { AxiosHttpResult, AxiosProgressEvent } from '@herodotus-cloud/core';

import { Service, HttpConfig } from '@herodotus-cloud/core';
import { ContentTypeEnum } from '@/enums';

class BucketService extends Service {
  private static instance: BucketService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): BucketService {
    if (this.instance == null) {
      this.instance = new BucketService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/bucket';
  }

  private getListAddress(): string {
    return this.getBaseAddress() + '/list';
  }

  private getPolicyAddress(): string {
    return this.getBaseAddress() + '/policy';
  }

  public listBuckets(): Promise<AxiosHttpResult<ListBucketDetailsResult>> {
    return this.getConfig().getHttp().get<ListBucketDetailsResult, string>(this.getListAddress());
  }

  public createBucket(request: CreateBucketArgument): Promise<AxiosHttpResult<CreateBucketResult>> {
    return this.getConfig().getHttp().post<CreateBucketResult, CreateBucketArgument>(this.getBaseAddress(), request);
  }

  public deleteBucket(request: DeleteBucketArgument): Promise<AxiosHttpResult<DeleteBucketResult>> {
    return this.getConfig().getHttp().delete<DeleteBucketResult, DeleteBucketArgument>(this.getBaseAddress(), request);
  }

  public setBucketPolicy(request: PutBucketPolicyArgument): Promise<AxiosHttpResult<PutBucketPolicyResult>> {
    return this.getConfig()
      .getHttp()
      .put<PutBucketPolicyResult, PutBucketPolicyArgument>(this.getPolicyAddress(), request);
  }
}

class ObjectService extends Service {
  private static instance: ObjectService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): ObjectService {
    if (this.instance == null) {
      this.instance = new ObjectService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/object';
  }

  private getListV2Address(): string {
    return this.getBaseAddress() + '/list';
  }

  private getMultiDeleteAddress(): string {
    return this.getBaseAddress() + '/multi';
  }

  private getDownloadAddress(): string {
    return this.getBaseAddress() + '/download';
  }

  private getDisplayAddress(): string {
    return this.getBaseAddress() + '/display';
  }

  public getUploadAddress(): string {
    return this.getBaseAddress() + '/upload';
  }

  private getAttributesAddress(): string {
    return this.getBaseAddress() + '/attributes';
  }

  private getLegalHoldAddress(): string {
    return this.getBaseAddress() + '/legalhold';
  }

  private getRetentionAddress(): string {
    return this.getBaseAddress() + '/retention';
  }

  private getListVersionsAddress(): string {
    return this.getBaseAddress() + '/versions';
  }

  public listObjectsV2(request: ListObjectsV2Argument): Promise<AxiosHttpResult<ListObjectsV2Result>> {
    return this.getConfig().getHttp().get<ListObjectsV2Result, ListObjectsV2Argument>(this.getListV2Address(), request);
  }

  public delete(request: DeleteObjectArgument): Promise<AxiosHttpResult<DeleteObjectResult>> {
    return this.getConfig().getHttp().delete<DeleteObjectResult, DeleteObjectArgument>(this.getBaseAddress(), request);
  }

  public upload(
    bucketName: string,
    file: File,
    onProgress?: (progressEvent: AxiosProgressEvent) => void,
  ): Promise<AxiosHttpResult<PutObjectResult>> {
    if (onProgress) {
      return this.getConfig()
        .getHttp()
        .post<
          PutObjectResult,
          any
        >(this.getUploadAddress(), { bucketName: bucketName, file: file }, { contentType: ContentTypeEnum.JSON }, { onUploadProgress: onProgress });
    } else {
      return this.getConfig()
        .getHttp()
        .post<PutObjectResult, any>(this.getUploadAddress(), { bucketName: bucketName, file: file });
    }
  }

  public download(
    request: GetObjectArgument,
    onProgress?: (progressEvent: AxiosProgressEvent) => void,
  ): Promise<AxiosHttpResult<Blob>> {
    if (onProgress) {
      return this.getConfig()
        .getHttp()
        .post<
          Blob,
          any
        >(this.getDownloadAddress(), request, { contentType: ContentTypeEnum.JSON }, { responseType: 'blob', onDownloadProgress: onProgress });
    } else {
      return this.getConfig().getHttp().post<Blob, any>(this.getDownloadAddress(), request);
    }
  }

  public display(request: GetObjectArgument): Promise<AxiosHttpResult<Blob>> {
    return this.getConfig()
      .getHttp()
      .post<
        Blob,
        any
      >(this.getDisplayAddress(), request, { contentType: ContentTypeEnum.JSON }, { responseType: 'blob' });
  }

  public batchDelete(request: DeleteObjectsArgument): Promise<AxiosHttpResult<DeleteObjectsResult>> {
    return this.getConfig()
      .getHttp()
      .delete<DeleteObjectsResult, DeleteObjectsArgument>(this.getMultiDeleteAddress(), request);
  }

  public fetchObjectAttributes(
    request: GetObjectAttributesArgument,
  ): Promise<AxiosHttpResult<GetObjectAttributesResult>> {
    return this.getConfig()
      .getHttp()
      .get<GetObjectAttributesResult, GetObjectAttributesArgument>(this.getAttributesAddress(), request);
  }

  public setObjectLegalHold(request: PutObjectLegalHoldArgument): Promise<AxiosHttpResult<PutObjectLegalHoldResult>> {
    return this.getConfig()
      .getHttp()
      .put<PutObjectLegalHoldResult, PutObjectLegalHoldArgument>(this.getLegalHoldAddress(), request);
  }

  public setObjectRetention(request: PutObjectRetentionArgument): Promise<AxiosHttpResult<PutObjectRetentionResult>> {
    return this.getConfig()
      .getHttp()
      .put<PutObjectRetentionResult, PutObjectRetentionArgument>(this.getRetentionAddress(), request);
  }

  public listObjectVersions(request: ListObjectVersionsArgument): Promise<AxiosHttpResult<ListObjectVersionsResult>> {
    return this.getConfig()
      .getHttp()
      .get<ListObjectVersionsResult, ListObjectVersionsArgument>(this.getListVersionsAddress(), request);
  }
}

class MultipartUploadService extends Service {
  private static instance: MultipartUploadService;

  private constructor(config: HttpConfig) {
    super(config);
  }

  public static getInstance(config: HttpConfig): MultipartUploadService {
    if (this.instance == null) {
      this.instance = new MultipartUploadService(config);
    }
    return this.instance;
  }

  public getBaseAddress(): string {
    return this.getConfig().getOss() + '/oss/multipart-upload';
  }

  public getCreateMultipartUploadAddress(): string {
    return this.getBaseAddress() + '/create';
  }

  public getCompleteMultipartUploadAddress(): string {
    return this.getBaseAddress() + '/complete';
  }

  public createChunkUpload(
    request: CreateMultipartUploadArgument,
  ): Promise<AxiosHttpResult<CreateMultipartUploadBusiness>> {
    return this.getConfig()
      .getHttp()
      .post<
        CreateMultipartUploadBusiness,
        CreateMultipartUploadArgument
      >(this.getCreateMultipartUploadAddress(), request);
  }

  public completeChunkUpload(
    request: CompleteMultipartUploadArgument,
  ): Promise<AxiosHttpResult<CompleteMultipartUploadResult>> {
    return this.getConfig()
      .getHttp()
      .post<
        CompleteMultipartUploadResult,
        CompleteMultipartUploadArgument
      >(this.getCompleteMultipartUploadAddress(), request);
  }
}

export { BucketService, ObjectService, MultipartUploadService };
