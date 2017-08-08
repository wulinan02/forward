import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';

class Title extends Component{
  constructor(){
    super()
    this.state={
      title:[]
    }
  }
  componentDidMount(){
    $.ajax({
      url:"http://127.0.0.1:3005/test/title",
      type:"get",
      success:function(e){
      	console.log(e);
      	this.setState({
        	title:e
    	 })
      }.bind(this)
    });

    /*this.refs.replace.onclick=function(){
      $('.newtit').attr("display",'block');
      $.ajax({
          type:"post",
          url:"http://127.0.0.1:3005/test/replacetable",
          async:true,
          data:{
            'id':$('.id').html(),
            'title':$('.newtit').val(),
          },
          success:function(e){console.log(e)}
      });
    }

    this.refs.remove.onclick=function(){       
      $.ajax({
        type:"post",
        url:"http://127.0.0.1:3005/test/removetable",
        async:true,
        data:{'id':$('.id').html()},
        success:function(e){console.log(e)}
      });
    }*/
  }
  render(){
    return <ul>
        {this.state.title.map(function(e){
         return <li>
          <span className="id">{e.id}</span>
          <Link to={`/content?id=${e.id}`}>{e.title}</Link>
          <button ref="replace">修改</button>
          <button ref="remove">删除</button>          
          <input className="newtit" type="text" style={{display: 'none'}}/>
         </li>
        })}
    </ul>    
  }
}

export default Title;
