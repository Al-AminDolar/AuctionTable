import { Button, Col, Divider, Input, Row } from "antd";
import React from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

const AuctionTable = () => {
  return (
    <div>
      {" "}
      <div className="border rounded-md ">
        {/* Table Header */}
        <Row className=" h-12 flex items-center p-5">
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
        </Row>

        {/* Tble Body */}
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
          <Col flex="1" className="p-1 border-r-0 space-x-3 text-center">
            <EditOutlined className="text-lg" />
            <DeleteOutlined className="text-lg" />
          </Col>
        </Row>

        <Button type="dashed" icon={<PlusOutlined />} className="w-full my-2">
          Add new auction
        </Button>
      </div>
    </div>
  );
};

export default AuctionTable;
