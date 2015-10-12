/**
 * Created by yutao on 15/10/6.
 */
import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import ItemPhoto from '../poi/itemPhoto.react.js';
import DynamicScripts from '../../server/lib/dynamicscript.js'
import Header from '../app/header.react.js';
import Canvas from '../frame/canvas.react.js';

export default class Frame extends Component {

  static propTypes = {
    actions: PropTypes.object,
    msg: PropTypes.object,
    item: PropTypes.object
  }

  componentDidMount() {
    this.props.actions.getFrame(this.props.params.id);
    jQuery(document).ready(function() {
      App.init();
    });
  }

  render() {
    const {actions, msg: {item: msg}, frame: {frame}} = this.props;

    const scripts = `
      <script type="text/javascript" src="/ui/unify/js/app.js"></script>
      <script type="text/javascript" src="/js/fabric/dist/fabric.js"></script>
      <script type="text/javascript" src="/js/darkroom/build/darkroom.js"></script>
      <script>
        jQuery(document).ready(function() {
          App.init();
            var owl = $("#owl-demo");

            owl.owlCarousel({
                items : 10, //10 items above 1000px browser width
                itemsDesktop : [1000,5], //5 items between 1000px and 901px
                itemsDesktopSmall : [900,3], // betweem 900px and 601px
                itemsTablet: [600,2], //2 items between 600 and 0
                itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                pagination: false,
                scrollPerPage: true
            });
        });

      </script>
    `;

    return (
      <DocumentTitle title={""}>
        <DynamicScripts scripts={scripts}>
          <div className="wrapper header-fixed header-fixed-space">
            <div className="header-v6 header-classic-white header-sticky">
              <Header tab={""}/>
            </div>
            <div className="container main-container headerOffset">
              {/*<div className="row">
               //  <Breadcrumb category={this.state.category}/>
               //</div>*/}
              <div className="row transitionfx">
                <div className="col-md-8">
                  {(frame.url) ? <Canvas data={frame}/> : null}

                </div>
              </div>
              {/*/.recommended  <Recommend />*/}
              <div style={{clear: 'both'}}/>
            </div>
          </div>
        </DynamicScripts>
      </DocumentTitle>
    );
  }

}
