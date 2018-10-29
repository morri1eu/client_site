import React, {Component} from "react";

class Table extends Component{
    constructor(props){
        super(props)
    }

    render(){
        var head
        if(this.props.items[0].product_name){
            head=<tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image Url</th>
            </tr>
            }
            else{
                head=<tr>
                <th>Name</th>
                <th>Email</th>
                <th>Session Level</th>
                <th>Date</th>
            </tr>
            }
        return(
            <div>
                <h1>Admin Page</h1>
                <h5>If you've made it this far you can see that I can work with react to make a client page. Typically here I would create buttons in the table that would delete particular products/sessions from the database and probably add a section where new products could be added. If my client asked for it, I would make it so they could email the person who requested a session directly from here, but I mainly made this page to show what I can do. I think I did that. On any page with a footer is my name Evan Morris, it links to portfolio. You can email me at morri1eu@gmail.com or message me on linkedIn </h5>
    <table>
        <thead>
            {head}
        </thead>
        <tbody>
            {this.props.items.map(item => <tr>
                <td>{item.product_name || item.session_name}</td>
                <td>{item.product_price || item.session_email}</td>
                <td>{item.product_category || item.session_level}</td>
                <td>{item.product_img_url || item.date}</td>
            </tr>)}
        </tbody>
    </table>
    </div>
)}}
export default Table