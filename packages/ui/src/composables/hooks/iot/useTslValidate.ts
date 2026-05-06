import { ref } from "vue";

export default function useTslValidate() {
  const identifier = ref(null);

  const getIdentifierValidator = (): Promise<boolean> => {
    console.log(identifier.value);
    if (identifier.value) {
      //@ts-ignore
      return identifier.value.validate() as Promise<boolean>;
    } else {
      return Promise.reject();
    }
  };

  const validate = (): Promise<boolean> => {
    const valid = getIdentifierValidator();
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

  return { getIdentifierValidator, validate, identifier };
}
