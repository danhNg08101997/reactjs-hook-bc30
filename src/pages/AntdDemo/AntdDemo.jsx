import React from "react";
import { Button, DatePicker } from "antd";

export default function AntdDemo() {
  return (
    <div className="container">
      AntdDemo
      <div>
        <DatePicker />
        <br />
        <Button size="small" shape="round">Click me!</Button>
      </div>
    </div>
  );
}
