export type { Entity, Conditions, HttpClientOptions, AxiosHttpResult, Page, Pageable } from '@herodotus/core';
export interface BaseMongoEntity {
    id?: string;
    createTime?: Date;
    updateTime?: Date;
}
/**
 * 很多 Quasar 组件使用到的基本数据类型
 */
export interface QBaseDataItem<T> {
    label: string;
    value: T;
}
