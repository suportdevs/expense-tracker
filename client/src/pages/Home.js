import React, { useState } from "react";
import Graph from "../components/Graph/Graph";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Label from "../components/Label";
import Form from "../components/Form/Form";
import History from "../components/History";
import Modal from "../components/Modal";
import { default as api } from "../store/apiSlice";
import { getLabels } from "../utilies/functions";

const Home = () => {
  const [modalToggle, setModalToggle] = useState("hidden");

  const { data, isError, isFetching, isLoading, isSuccess } =
    api.useGetTransactionLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();

  const historyRemoveHanlder = async (e) => {
    console.log(e.target.dataset.id);
    await deleteTransaction(e.target.dataset.id);
  };

  let labels;
  let history;
  if (isError) {
    labels = <div>There was an error!</div>;
    history = <div>There was an error!</div>;
  } else if (isFetching || isLoading) {
    labels = <div>Loading...</div>;
    history = <div>Loading...</div>;
  } else if (isSuccess) {
    console.log(getLabels(data));
    labels = getLabels(data).map((item, index) => (
      <Label
        name={item.type}
        color={item.color}
        percent={item.percent}
        key={index}
      ></Label>
    ));
    history = data.map((item, index) => (
      <History
        id={item._id}
        name={item.name}
        color={item.category.color}
        key={index}
        historyRemoveHanlder={historyRemoveHanlder}
      ></History>
    ));
  }

  return (
    <DefaultLayout>
      <div className="grid grid-cols-2 gap-48 mx-auto text-center mt-10">
        <div>
          <div className="w-80 mx-auto">
            <Graph></Graph>
            {labels}
          </div>
        </div>
        <div>
          <Form setModalToggle={setModalToggle}></Form>
          {history}
        </div>
      </div>
      <Modal modalToggle={modalToggle} setModalToggle={setModalToggle}></Modal>
    </DefaultLayout>
  );
};

export default Home;
