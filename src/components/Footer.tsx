import * as React from "react";
import * as createHashHistroy from  "history";

import * as styles from "../css/footer.css"

class Footer extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
    }

    public render() {
        return (
            <div className={styles.footer}>
                <div className={styles.bottom_ul}>
                    <ul>
                        <li className={styles.bottom_aa}>新手上路</li>
                        <li><a onClick={this.redirect.bind(this,1)}>法律解读</a></li>
                        <li><a onClick={this.redirect.bind(this,2)}>押金政策</a></li>
                        <li><a onClick={this.redirect.bind(this,3)}>保险条款</a></li>
                    </ul>
                    <ul>
                        <li className={styles.bottom_aa}>服务规则</li>
                        <li><a onClick={this.redirect.bind(this,4)}>服务条款</a></li>
                        <li><a onClick={this.redirect.bind(this,5)}>驾客协议</a></li>
                        <li><a onClick={this.redirect.bind(this,6)}>平台规则</a></li>
                    </ul>
                    <ul>
                        <li className={styles.bottom_aa}>帮助中心</li>
                        <li><a onClick={this.redirect.bind(this,7)}>预定取车</a></li>
                        <li><a onClick={this.redirect.bind(this,8)}>会员服务</a></li>
                    </ul>
                    <ul>
                        <li className={styles.bottom_aa}>联系我们</li>
                        <li>客服电话：0512-88888888</li>
                    </ul>
                </div>
                <div className={styles.bottom_right}>
                    <img src="//i.loli.net/2019/02/20/5c6ce63e6c559.jpg" width="99px" height="99px"/>
                    <h4>关注微信公众号</h4>
                </div>
                <p>Copyright©2018-2019 www.zuche.com All Rights Reserved.　一租车官网 京ICP备88888888号 京公网安备号 111111111111111</p>
            </div>
        );
    }

    private redirect = (val:number) => {
        const url = "/help/" + val;
        createHashHistroy.createHashHistory().push(url);
        location.reload();
    }
}

export default Footer;