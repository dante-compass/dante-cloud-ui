import type { BucketDomain } from '@herodotus-cloud/apis';

import { API } from '@/configurations';

export default function useOssBucket() {
  const loading = shallowRef(false);
  const tableRows = ref([]) as Ref<Array<BucketDomain>>;

  const fetchAllBuckets = () => {
    API.core
      .ossBucket()
      .listBuckets()
      .then((result) => {
        const data = result.data.buckets as Array<BucketDomain>;
        tableRows.value = data;
        loading.value = false;
      })
      .catch(() => {
        loading.value = false;
      });
  };

  return {
    loading,
    tableRows,
    fetchAllBuckets,
  };
}
