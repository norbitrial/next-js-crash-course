import data from "../../../../data";

export default ({ query: { id } }, res) => {
  const found = data.find((e) => e.id === id);
  res.status(200).json(found ?? `${id} not found`);
};
