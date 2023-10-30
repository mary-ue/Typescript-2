class HttpResponde<D, E> {
  protected success: boolean;
  protected data?: D;
  protected code? : E;

  constructor(success: boolean, data?: D, error?: E) {
    this.success = success;

    if (data) {
      this.data = data;
    }

    if (error) {
      this.code = error;
    }
  }
}

const responseToken = new HttpResponde<number, string>(true, 342342234);
const responseUser = new HttpResponde<string, string>(true, 'Геннадий Петров');

