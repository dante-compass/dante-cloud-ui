export default function useTslValidation() {
  const identifier = ref();

  const getValidator = (): Promise<boolean> => {
    if (identifier.value) {
      return identifier.value.validate() as Promise<boolean>;
    } else {
      return Promise.reject();
    }
  };

  const validate = (): Promise<boolean> => {
    const valid = getValidator();
    return new Promise<boolean>((resolve, reject) => {
      valid
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return { getValidator, validate, identifier };
}
