{
  interface Goods {
    id: number;
    title: string;
    count?: number;
    readonly price: number;
  }

  type partialGoods = Partial<Goods>;

  type requiredGoods = Required<Goods>;

  type readonlyGoods = Readonly<Goods>;

  type RRGoods = Required<Readonly<Goods>>;

  type recordGoods = Record<number, Goods>;

  const listGoods: recordGoods = {
    1: {
      id: 324324,
      price: 5000,
      title: 'book',
    },
    33: {
      id: 66579,
      price: 1000,
      count: 15,
      title: 'pen',
    },
  }

  type omitGoods = Omit<Goods, 'id'>;

  type pickGoods = Pick<Goods, 'title' | 'price'>;

  const getGoods = (title: string, price: number, count: number): Goods => {
    return {
      id: Math.floor(Math.random() * 10e8),
      title,
      price,
      count,
    };
  };

  type goods = ReturnType<typeof getGoods>
}