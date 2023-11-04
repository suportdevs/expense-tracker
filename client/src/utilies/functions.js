import _ from "lodash";

export function getSum(transaction, type) {
  let sum = _(transaction)
    .groupBy("category._id")
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, "amount");
      return {
        type: objs[0].category.name,
        color: objs[0].category.color,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();

  return sum;
}

export function getLabels(transaction) {
  let amountSum = getSum(transaction, "type");
  let Total = _.sum(getSum(transaction));

  console.log(Total);
  let percent = _(amountSum)
    .map((obj) => _.assign(obj, { percent: (100 * obj.total) / Total }))
    .value();
  return percent;
}

export function getChartData(transaction) {
  let amountArr = getSum(transaction);

  let type = transaction.map((data) => data.category.name);
  let bg = transaction.map((data) => data.category.color);
  bg = _.uniq(bg);
  type = _.uniq(type);

  const config = {
    data: {
      labels: type,
      datasets: [
        {
          label: "My First Dataset",
          data: amountArr,
          backgroundColor: bg,
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 100,
    },
  };

  return config;
}

export function getTotal(transaction) {
  let total = _.sum(getSum(transaction));
  return total ?? 0;
}
