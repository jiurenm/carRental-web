import * as React from "react";
import { Card, List, Avatar, Button } from "antd";
import axios from "axios";

import { Hello } from "./Hello"

import * as styles from '../css/public.css';

/// <reference path="../interfaces.d.ts"/>

const tabListNoTitle = [
  {
    key: "shortTime",
    tab: "短期自驾"
  },
  {
    key: "workday",
    tab: "工作日套餐"
  },
  {
    key: "week",
    tab: "周租套餐"
  },
  {
    key: "month",
    tab: "月租套餐"
  },
  {
    key: "year",
    tab: "年租套餐"
  }
];

let car = ""

const contentList = {
  shortTime: "",
  workday: "",
  week: "",
  month: "",
  year: ""
};

class CarList extends React.Component<any, CarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      carList: "",
      key: "shortTime",
      noTitleKey: "shortTime",
      selectedTag: []
    };
  }

  public componentWillMount() {
    this.getData();
  }

  public render() {
    return (
      <div>
        <div style={{ float: 'left', width: '30%', border: '1px solid #e8e8e8' }}>
          <div style={{ marginTop: '5%', marginLeft: '3%', marginBottom: '5%' }}>
            <Hello getMsg={(msg: any) => this.getMsg(msg)} />
          </div>
        </div>
        <div style={{ float: 'right', width: '70%' }}>
          <Card
            style={{ width: "100%" }}
            tabList={tabListNoTitle}
            activeTabKey={this.state.noTitleKey}
            onTabChange={key => this.onTabChange(key)}
          >
            {contentList[this.state.noTitleKey]}
          </Card>
        </div>
      </div>
    );
  };

  public componentWillUpdate() {
    if (car === "") {
      console.log("哈哈哈")
    }
    else {
      contentList[this.state.key] = (
        <List
          itemLayout="horizontal"
          dataSource={car}
          renderItem={(item: any) => (
            <List.Item id={styles.ant_list_item}
              actions={[<Button style={{ marginTop: "20px" }} type="primary" onClick={() => this.rental(item.id)} key={item.id}>租车</Button>]}
              extra={"  "}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src={item.picture} />
                }
                title={<a href={"#/" + item.id}>{item.name}
                  <br />{"￥" + item.price[0].shortTime + "/日均"}</a>}
                description={"三厢|1.5自动|乘坐" + item.carDetails[0].zws + "人"}
              />
            </List.Item>
          )}
        />
      );
    }
  }

  private getMsg(msg: any) {
    car = msg
    this.setState({
      carList: msg
    })
  }

  private getData() {
    axios
      .get("http://192.168.1.6:8083/car/")
      .then(res => {
        if (res.data.code === 200) {
          contentList[this.state.key] = (
            <List
              itemLayout="horizontal"
              dataSource={res.data.data}
              renderItem={(item: any) => (
                <List.Item id={styles.ant_list_item}
                  actions={[<Button style={{ marginTop: "20px" }} type="primary" onClick={() => this.rental(item.id)} key={item.id}>租车</Button>]}
                  extra={"  "}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar src={item.picture} />
                    }
                    title={<a href={"#/" + item.id}>{item.name}
                      <br />{"￥" + item.price[0].shortTime + "/日均"}</a>}
                    description={"三厢|1.5自动|乘坐" + item.carDetails[0].zws + "人"}
                  />
                </List.Item>
              )}
            />
          );
          this.setState({
            carList: res.data.data
          });
          car = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  private onTabChange = (key: any) => {
    this.setState({
      noTitleKey: key
    });
    contentList[key] = (
      <List
        itemLayout="horizontal"
        dataSource={this.state.carList}
        renderItem={(item: any) => (
          <List.Item id={styles.ant_list_item}
            actions={[<Button style={{ marginTop: "20px" }} type="primary" key={item.id}>租车</Button>]}
            extra={"   "}
          >
            <List.Item.Meta
              avatar={
                <Avatar src={item.picture} />
              }
              title={
                <a href={"#" + item.id}>{item.name}<br />
                  ￥{this.getPrice(key, item.price[0])}
                </a>
              }
              description={"三厢|1.5自动|乘坐" + item.carDetails[0].zws + "人"}
            />
          </List.Item>
        )}
      />
    );
  };

  private rental(id: string) {
    alert(id)
    console.log(window.localStorage.getItem("tags"))
  };

  private getPrice(type: string, price: any) {
    switch (type) {
      case "shortTime":
        return price.shortTime + "/日均";
      case "workday":
        return price.workday + "/套餐价";
      case "week":
        return price.week + "/套餐价";
      case "month":
        return price.month + "/套餐价";
      case "year":
        return price.year + "/套餐价";
      default:
        return "暂无数据";
    }
  };
}

export default CarList;
