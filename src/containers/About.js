import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render(){
    return(
      <div className="About">
        <div className="lander">
          <h1>Our Company</h1>
            <p>Create your own profile</p>
            <div className="content">
            Quisque in semper turpis. Nunc vitae imperdiet erat. In nec turpis sit amet urna laoreet lobortis quis ac orci.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien nibh, tincidunt at facilisis eget, ultrices eu sapien.
            Morbi tempor malesuada odio, eget tincidunt nunc posuere eu. Nulla sem ex, pellentesque ut urna eget, rutrum malesuada nulla.
            Vestibulum ullamcorper maximus leo eget viverra. Integer ut condimentum velit, non lobortis mi.
            Suspendisse semper tempor mi, sed cursus justo venenatis vitae. Sed sed magna lorem. Aenean quis orci tellus.
            Sed sollicitudin lectus quis lacinia sodales. Quisque luctus urna magna, iaculis aliquet tortor accumsan a.
            Aliquam tristique ipsum et ipsum accumsan venenatis. Maecenas eu volutpat mauris.
            </div>
        </div>
      </div>
    );
  }
}
