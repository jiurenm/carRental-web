import { Tag } from "antd";
import axios from "axios";
import * as React from "react";

const CheckableTag = Tag.CheckableTag;

let tagsFromServer = ["豪华型", "经济型", "商务型"];
let tagsFromServer2 = ["凯迪拉克", "大众"];
const tagsFromServer3 = ["0-150", "150-300", "300-500", "500-1000"];

export class Hello extends React.Component<any, any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTags: []
    };
  }

  public componentWillMount() {
    axios
      .get("http://47.102.210.246:8083/search/cx")
      .then(res => {
        tagsFromServer = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("http://47.102.210.246:8083/search/pp")
      .then(res => {
        tagsFromServer2 = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  public render() {
    const { selectedTags } = this.state;
    return (
      <div>
        <h4 style={{ marginRight: 8, display: "block" }}>车型:</h4>
        {tagsFromServer.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
        <h4 style={{ marginRight: 8, display: "block", marginTop: "5%" }}>
          价格:
        </h4>
        {tagsFromServer3.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
        <h4 style={{ marginRight: 8, display: "block", marginTop: "5%" }}>
          品牌:
        </h4>
        {tagsFromServer2.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    );
  }

  public shouldComponentUpdate(nextProps: any, nextState: any) {
    if (this.state.selectedTags === []) {
      return true;
    } else {
      return nextState.selectedTags !== this.state.selectedTags;
    }
  }

  public componentWillUpdate() {
    axios
      .post("http://47.102.210.246:8083/search/search", {
        param: window.localStorage.getItem("tags")
      })
      .then(res => {
        this.props.getMsg(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  private handleChange = (tag: any, checked: any) => {
    window.localStorage.removeItem("tags");
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t: any) => t !== tag);
    window.localStorage.setItem("tags", nextSelectedTags);
    this.setState({
      selectedTags: nextSelectedTags
    });
  };
}
