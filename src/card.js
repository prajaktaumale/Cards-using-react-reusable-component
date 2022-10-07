import React, { Component } from "react";
import Card from "./cardUi";


class cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card title = "BASIC" list ="3 active sitemaps" list1="Umlimited archieves" list2="Unlimited Users" list3="Email Support" price = "$3.99/month"/>
                    </div>
                    <div className="col-md-4">
                        <Card title = "PRO" list ="3 active sitemaps" list1="Umlimited archieves" list2="Unlimited Users" list3="Email Support" price = "$9.99/month"/>
                    </div>
                    <div className="col-md-4">
                        <Card title = "PREMIUM" list ="3 active sitemaps" list1="Umlimited archieves" list2="Unlimited Users" list3="Email Support" price = "$24.99/month"/>
                    </div>
                </div>
            </div>
        );
    };
}
export default cards;