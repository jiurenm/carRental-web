import * as React from "react";
import { Card, List, Avatar } from "antd";
import axios from "axios";

import * as styles from '../css/public.css';

const tabListNoTitle = [
  {
    key: "short",
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

const contentList = {
  short: "1",
  workday: "2",
  week: "3",
  month: "4",
  year: "5"
};

class CarList extends React.Component<any, any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      carList: "",
      key: "short",
      noTitleKey: "short"
    };
  }

  public componentWillMount() {
    axios
      .get("http://localhost:8083/car/")
      .then(res => {
        if (res.data.code === 200) {
          this.setState({
            carList: res.data.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  public render() {
    return (
      <div>
        <Card
          style={{ width: "100%" }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => this.onTabChange(key)}
        >
          {contentList[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }

  private onTabChange = (key: any) => {
    this.setState({
      noTitleKey: key
    });
    contentList[key] = (
      <List
        itemLayout="horizontal"
        dataSource={ this.state.carList }
        renderItem={(item: any) => (
          <List.Item id={ styles.ant_list_item }>
            <List.Item.Meta
              avatar={
                <Avatar src={ item.picture } />
              }
              title={<a href="#">{ item.name }</a>}
              description= { item.id }
            />
          </List.Item>
        )}
      />
    );
  };
}

export default CarList;
