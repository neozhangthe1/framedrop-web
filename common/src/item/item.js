/**
 * Created by yutao on 15/9/19.
 */
import {Record} from 'immutable';

const Item = Record({
  id: 0,
  name: '',
  img: '',
  width: 0,
  height: 0,
  fid: "",
  product_img: "",
  product_img_width: 0,
  product_img_height: 0,
  src_title: "",
  src_title_cn: "",
  src_id: "",
  src_type: "",
  liked: false,
  num_viewed: 0,
  num_liked: 0,
  num_comments: 0
});

export default Item;
