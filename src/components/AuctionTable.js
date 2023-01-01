import {
  Button,
  Col,
  DatePicker,
  Divider,
  Input,
  Row,
  Select,
  Space,
  TimePicker,
} from "antd";
import React, { useState } from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === "time") return <TimePicker size="large" onChange={onChange} />;
  if (type === "date") return <DatePicker size="large" onChange={onChange} />;
  return <DatePicker size="large" picker={type} onChange={onChange} />;
};

const AuctionTable = () => {
  const [type, setType] = useState("time");
  const [rowsData, setRowsData] = useState([]);

  const addTableRows = () => {
    const rowsInput = {
      quantity: "",
      minQuantity: "",
      bidsReceived: "",
      start: "",
      duration: "",
      reserve: "",
      buyNow: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  return (
    <div>
      {" "}
      <div className="border rounded-md h-[380px] overflow-y-scroll">
        {/* Table Header */}
        <Row span={24} className=" h-12 flex items-center p-5">
          <Col span={3} className="font-semibold ">
            Quantity
          </Col>
          <Divider type="vertical" />
          <Col span={3} className="text-center font-semibold ">
            Min Quantity
          </Col>
          <Divider type="vertical" />
          <Col span={3} className="text-center font-semibold ">
            Bids Received
          </Col>
          <Divider type="vertical" />
          <Col span={3} className="text-center font-semibold ">
            Start Date
          </Col>
          <Divider type="vertical" />
          <Col span={3} className="text-center font-semibold ">
            Duration
          </Col>
          <Divider type="vertical" />
          <Col span={3} className="text-center font-semibold ">
            Reserve
          </Col>
          <Divider type="vertical" />
          <Col span={3} className="text-center font-semibold ">
            Buy Now
          </Col>
          <Col span={2} className="text-center font-semibold "></Col>
          <hr />
        </Row>

        {/* Tble Body */}

        {rowsData.map((data, index) => {
          const {
            quantity,
            minQuantity,
            bidsReceived,
            start,
            duration,
            reserve,
            buyNow,
          } = data;

          return (
            <Row className="bg-white h-28 border-t border-gray-200 border-solid flex items-center p-5">
              <Col span={3}>
                <Input
                  size="large"
                  style={{
                    width: "50%",
                  }}
                />
              </Col>
              <Divider type="vertical" />
              <Col span={3}>
                <Input
                  size="large"
                  style={{
                    width: "70%",
                  }}
                />
              </Col>
              <Divider type="vertical" />
              <Col span={3}>
                <Input
                  size="large"
                  style={{
                    width: "50%",
                  }}
                />
              </Col>
              <Divider type="vertical" />
              <Col span={3}>
                <DatePicker
                  size="large"
                  style={{
                    width: "50%",
                  }}
                />
              </Col>
              <Divider type="vertical" />
              <Col span={3}>
                <Space>
                  <Select size="large" value={type} onChange={setType}>
                    <Option value="time">Time</Option>
                    <Option value="date">Date</Option>
                    <Option value="week">Week</Option>
                    <Option value="month">Month</Option>
                    <Option value="quarter">Quarter</Option>
                    <Option value="year">Year</Option>
                  </Select>
                  <PickerWithType
                    type={type}
                    onChange={(value) => console.log(value)}
                  />
                </Space>
              </Col>
              <Divider type="vertical" />
              <Col span={3}>
                <Input
                  size="large"
                  style={{
                    width: "50%",
                  }}
                />
              </Col>
              <Divider type="vertical" />
              <Col span={3}>
                <Input
                  size="large"
                  style={{
                    width: "50%",
                  }}
                />
              </Col>
              <Divider type="vertical" />
              <Col span={1} className="  text-center space-x-3">
                <EditOutlined className="text-lg" />
                <DeleteOutlined
                  onClick={() => deleteTableRows(index)}
                  className="text-lg"
                />
              </Col>
            </Row>
          );
        })}
      </div>
      <Row span={24}>
        <Col>
          {" "}
          <Button
            onClick={addTableRows}
            type="dashed"
            icon={<PlusOutlined />}
            className="w-full my-2"
          >
            Add new auction
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AuctionTable;
