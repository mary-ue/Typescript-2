interface Goods {
  title: string;
  count: number;
  price: number;
}



// const getCountGoods = <T extends Goods>(arr: T[], title: string): number => {
//   const goods = arr.find(item => item.title === 'title');
//   return goods?.count ?? 0;
// }

abstract class Cart<T extends Goods> {
  protected goods: T[] = [];

  public add(item: T): void {
    this.goods.push(item);
  }

  public get(title: string): T | null {
    return this.goods.find(item => item.title === title) ?? null;
  }

  public get totalPrice(): number {
    return this.goods.reduce((acc, item) => acc + (item.price * item.count), 0)
  }
}

interface TechGoods {
  title: string;
  count: number;
  price: number;
  type: string;
  description: string;
}

class TechCart extends Cart<TechGoods> {}


