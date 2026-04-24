import type { AxiosProgressEvent } from '@herodotus/core';

import { filesize } from 'filesize';
import { endsWith, trimEnd, split } from 'lodash-es';

import { toast } from '@herodotus/core';
import { API } from '@/configurations';

import { useFileDownload } from '@herodotus/framework';

export default function useOss() {
  const { process, loadProgress, showProgress, showDownLoadProgress } = useFileDownload();

  const download = (bucketName: string, objectName: string, size?: number) => {
    if (size && size !== 0) {
      showDownLoadProgress();
      API.core
        .ossObject()
        .download({ bucketName: bucketName, objectName: objectName }, (progressEvent: AxiosProgressEvent) => {
          loadProgress.value = (progressEvent.loaded / size) * 100;
        })
        .then((response) => {
          const data = response as Blob;
          process(data, objectName);
        })
        .catch(() => {
          toast.error('下载失败');
        });
    } else {
      API.core
        .ossObject()
        .download({ bucketName: bucketName, objectName: objectName })
        .then((response) => {
          const data = response as Blob;
          process(data, objectName);
        })
        .catch(() => {
          toast.error('下载失败');
        });
    }
  };

  const humanObjectSize = (size: number) => {
    if (size) {
      return filesize(size);
    } else {
      return '';
    }
  };

  /**
   * 对象存储对象名称显示处理。
   *
   * 将显示为层级目录的对象名称处理为更合理的显示名称。包括目录类型对象名称的处理。
   * @param objectName 对象名称
   * @returns
   */
  const displayedObjectName = (objectName: string) => {
    if (endsWith(objectName, '/')) {
      return trimEnd(objectName, '/');
    } else {
      if (objectName.indexOf('/') !== -1) {
        const names = split(objectName, '/');
        return names[names.length - 1];
      } else {
        return objectName;
      }
    }
  };

  return {
    loadProgress,
    showProgress,
    download,
    humanObjectSize,
    displayedObjectName,
  };
}
