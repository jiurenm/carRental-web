import * as React from "react";
import * as createHashHistroy from  "history";

export class Footer extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    redirect(val:any) {
        var url = "/help/" + val;
        createHashHistroy.createHashHistory().push(url);
        location.reload();
    }

    render() {
        return (
            <div className="footer">
                <div className="mybody">
                    <div className="bottom-ul">
                        <ul>
                            <li className="bottom-aa">新手上路</li>
                            <li><a onClick={() => this.redirect("1")}>法律解读</a></li>
                            <li><a onClick={() => this.redirect("2")}>押金政策</a></li>
                            <li><a onClick={() => this.redirect("3")}>保险条款</a></li>
                        </ul>
                        <ul>
                            <li className="bottom-aa">服务规则</li>
                            <li><a onClick={() => this.redirect("4")}>服务条款</a></li>
                            <li><a onClick={() => this.redirect("5")}>驾客协议</a></li>
                            <li><a onClick={() => this.redirect("6")}>平台规则</a></li>
                        </ul>
                        <ul>
                            <li className="bottom-aa">帮助中心</li>
                            <li><a onClick={() => this.redirect("7")}>预定取车</a></li>
                            <li><a onClick={() => this.redirect("8")}>会员服务</a></li>
                        </ul>
                        <ul>
                            <li className="bottom-aa">联系我们</li>
                            <li>客服电话：0512-88888888</li>
                        </ul>
                    </div>
                    <div className="bottom-right">
                        <img src="//i.loli.net/2019/02/20/5c6ce63e6c559.jpg" width="99px" height="99px"></img>
                        <h4>关注微信公众号</h4>
                    </div>
                    <p>Copyright©2017-2019 www.zuche.com All Rights Reserved.　一租车官网 京ICP备88888888号 京公网安备号 111111111111111</p>
                </div>
            </div>
        );
    }
}