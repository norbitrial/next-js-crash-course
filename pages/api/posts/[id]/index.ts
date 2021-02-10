import data from "../../../../data";

export default ({ query: { id } }, res) => {
  res.status(200).json(data.find((e) => e.id === id));
};
