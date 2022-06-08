const coins = [];

class Coin {
  #id;
  #data;
  #instancesByOwner = [];

  setId(id) {
    if (this.#id) throw new Error("id is already set and now immutable");
    this.#id = id;
  }

  setData(data) {
    if (this.#data) throw new Error("data is already set and now immutable");
    this.#data = data;
  }

  hasOwner(owner) {
    return this.#instancesByOwner.has(owner);
  }

  addOwner(owner) {
    if (this.hasOwner(owner)) {
      throw new Error("owner already owns this token");
    }

    this.#instancesByOwner.push(owner);
  }

  getInstanceByOwner(owner) {
    const instanceId = this.#instancesByOwner.indexOf(owner);

    if (instanceId > -1) {
      return instanceId;
    } else {
      throw new Error("owner doesn't own this token");
    }
  }

  get id() {
    return this.#id;
  }

  get data() {
    return this.#data;
  }
}

export function addCoin(data) {
  const newCoin = new Coin();
  const coinId = coins.push(newCoin);
  newCoin.setId(coinId - 1);
  newCoin.setData(data);

  return true;
}

export function getCoinById(id) {
  const coin = coins[id];

  if (!coin) {
    throw new Error(`Coin with id ${id} doesn't exist`);
  }

  return coins[id];
}

export function getAllCoins() {
  return coins;
}
