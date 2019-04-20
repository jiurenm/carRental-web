import * as React from "react";
import { Tabs, List, Modal } from "antd";
import Axios from "axios";

const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;

class Mail extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    };
  }

  public componentWillMount() {
    Axios.get("http://47.102.210.246:8083/message/show", {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: localStorage.getItem("Authorization")
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          data: res.data.data
        });
      }
    });
  }

  public render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="未读消息" key="1">
            <List
              size="small"
              bordered={true}
              dataSource={this.state.data.filter((e: any) => e.status === 0)}
              renderItem={(item: any) => (
                <List.Item
                  actions={[
                    <a key={item.id} onClick={() => this.handleClick(item.id)}>
                      标为已读
                    </a>
                  ]}
                >
                  <div onClick={() => this.click(item)}>{item.title}</div>
                  <div style={{ marginLeft: "10%" }}>{item.date}</div>
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="已读消息" key="2">
            <List
              size="small"
              bordered={true}
              dataSource={this.state.data.filter((e: any) => e.status === 1)}
              renderItem={(item: any) => (
                <List.Item
                  actions={[
                    <a key={item.id} onClick={() => this.recycle(item.id)}>
                      放入回收站
                    </a>
                  ]}
                >
                  <div>{item.title}</div>
                  <div style={{ marginLeft: "10%" }}>{item.date}</div>
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="回收站" key="3">
            <List
              size="small"
              bordered={true}
              dataSource={this.state.data.filter((e: any) => e.status === 2)}
              renderItem={(item: any) => (
                <List.Item
                  actions={[
                    <a key={item.id} onClick={() => this.revert(item.id)}>
                      还原
                    </a>,
                    <a key={item.id} onClick={() => this.delete(item.id)}>
                      删除
                    </a>
                  ]}
                >
                  <div>{item.title}</div>
                  <div style={{ marginLeft: "10%" }}>{item.date}</div>
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }

  private callback = (key: any) => {
    switch (key) {
      case "1":
        break;

      default:
        break;
    }
  };

  private click = (item: any) => {
    confirm({
      title: "消息",
      content: item.message,
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {
        console.log("cancel");
      }
    });
    this.handleClick(item.id);
  };

  private handleClick = (id: any) => {
    Axios.get("http://47.102.210.246:8083/message/read/" + id, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: localStorage.getItem("Authorization")
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.componentWillMount();
      }
    });
  };

  private recycle = (id: any) => {
    Axios.get("http://47.102.210.246:8083/message/recycle/" + id, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: localStorage.getItem("Authorization")
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.componentWillMount();
      }
    });
  };

  private revert = (id: any) => {
    Axios.get("http://47.102.210.246:8083/message/revert/" + id, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: localStorage.getItem("Authorization")
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.componentWillMount();
      }
    });
  };

  private delete = (id: any) => {
    Axios.get("http://47.102.210.246:8083/message/delete/" + id, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: localStorage.getItem("Authorization")
      }
    }).then(res => {
      if (res.data.code === 200) {
        this.componentWillMount();
      }
    });
  };
}

export default Mail;
