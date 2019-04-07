import React, {Component} from 'react'
import { Input, Button } from 'antd';
import { Checkbox } from 'antd';
import './style.less'

const CheckboxGroup = Checkbox.Group;


const defaultCheckedList = ['标签A'];

const Search = Input.Search;

export default class AddTag extends Component {
  constructor(props) {
    super(props) 
    this.addTagHandler = this.addTagHandler.bind(this)
    this.onSearchInput = this.onSearchInput.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this)
    this.refreshHandler = this.refreshHandler.bind(this)
    this.onConfirmHandler = this.onConfirmHandler.bind(this)
  }

  state = {
    plainOptions: ['标签A', '标签B', '标签C'],
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    inputTag: ''
  };

  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? this.state.plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  addTagHandler(e) {
    const searchTag = this.state.inputTag;
    // console.log(`sss >>> `, this.state.plainOptions)
    const arr = [] ;
    for (let i = 0; i< this.state.plainOptions.length ;i++) {
      arr.push(this.state.plainOptions[i]);
    }
    arr.push(searchTag)
    this.setState({
      plainOptions: arr
    });
  }

  refreshHandler(e) {
    console.log(this.state.inputTag);
    this.setState({
      inputTag: ''
    })
  }

  onSearchInput(e) {
    this.setState({
      inputTag: e.target.value
    })
  }

  onConfirmHandler() {
    const { onCloseHandler } = this.props
    onCloseHandler(true);
  }

  onSearchHandler() {
    // const searchTag = this.state.inputTag;
    // // console.log(`sss >>> `, this.state.plainOptions)
    // const arr = [] ;
    // for (let i = 0; i< this.state.plainOptions.length ;i++) {
    //   arr.push(this.state.plainOptions[i]);
    // }
    // arr.push(searchTag)
    // this.setState({
    //   plainOptions: arr
    // });
  }

  render() {
    const {tagCardShow} = this.props
    return (
      <div className={tagCardShow ? "acty-tag show" : "acty-tag"}>
        <div className="tag-title">
          <span>添加标签</span>
          <a onClick={this.addTagHandler}>新增标签</a>
          <a onClick={this.refreshHandler}>刷新</a>
        </div>
        <Search
          onInput={this.onSearchInput}
          size="small"
          value={this.state.inputTag}
          placeholder="请输入您要搜索的内容"
          onSearch={this.onSearchHandler}
          style={{ width: 200 }}
        />
        <div>
          <CheckboxGroup 
            options={this.state.plainOptions} 
            value={this.state.checkedList} 
            onChange={this.onChange} />
        </div>
        <div className="tag-checkbox">
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            全选
          </Checkbox>
          <Button onClick={this.onConfirmHandler} className="btn-confirm" type="primary">确定</Button>         
          <Button>取消</Button>
          
        </div>
      </div>
    )
  }
}