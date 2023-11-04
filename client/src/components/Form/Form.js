import React, { useState } from "react";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import { default as api } from "../../store/apiSlice";

const Form = ({ setModalToggle }) => {
  const [name, setName] = useState("");
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState("");

  const { data, isError, isFetching, isLoading, isSuccess } =
    api.useGetCategoriesQuery();

  let option;
  if (isError) {
    option = <option>Error!</option>;
  } else if (isFetching || isLoading) {
    option = <option>Loading...</option>;
  } else if (isSuccess) {
    option = data.map((item, index) => (
      <option value={item._id} key={index}>
        {item.name}
      </option>
    ));
  }

  const [storeTransaction] = api.useStoreTransactionMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, transaction, amount);
    await storeTransaction({ name, category: transaction, amount }).unwrap();
  };

  return (
    <>
      <div className="w-80 mx-auto mb-10">
        <h2 className="text-xl font-bold mb-5">Transaction</h2>
        <form method="POST" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Transaction Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></Input>
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-11">
              <Select
                className={"rounded-r-none"}
                name="transaction"
                id="transaction"
                onChange={(e) => {
                  setTransaction(e.target.value);
                }}
              >
                <option value="">Select</option>
                {option}
              </Select>
            </div>
            <div>
              <p
                onClick={(e) => setModalToggle("block")}
                className="w-8 bg-indigo-500 text-white p-2 rounded-lg rounded-l-none font-semibold text-lg cursor-pointer"
              >
                +
              </p>
            </div>
          </div>
          <Input
            type="number"
            placeholder="Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          ></Input>
          <Button className="w-full bg-indigo-500 text-white p-2 rounded-lg font-semibold text-lg">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Form;
