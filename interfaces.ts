// Протипизировать фвйл (2 балла)

interface ICustomers {
  name: string;
  cars: CarType[];
}

type CarType = {
  name: string;
  model: string;
};

const customers = [
  {
    name: "John",
    cars: [
      {
        name: "Ford",
        model: "Fiesta",
      },
      {
        name: "Ford",
        model: "Focus",
      },
    ],
  },
  {
    name: "Dave",
    cars: [
      {
        name: "Chevrolet",
        model: "Camaro",
      },
      {
        name: "Chevrolet",
        model: "Impala",
      },
    ],
  },
];

const getCustomersNameList = (customers: ICustomers[]) => {
  if (customers === undefined) {
    return [];
  }

  return customers.map((customer: ICustomers) => {
    return customer.name;
  });
};

const add = (a: string, b: string) => {
  return `${a + b}`;
};
