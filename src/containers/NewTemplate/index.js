import React, {Component} from 'react'
import Wrapper from '@/components/Wrapper'
import { Steps, Button, Form, Input, Checkbox } from 'antd'
import { Modal, Select, Icon } from 'antd';
import './style.less'

const Step = Steps.Step
const { TextArea } = Input;
const Option = Select.Option;

export default class NewActivity extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      visible: false,
      fields: [
        {
          name: '',
          value: ''
        }
      ], 
    };
    this.addSelectHanderl = this.addSelectHanderl.bind(this)
  }

  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleChange = (idx, value, obj) => {
    const fields = this.state.fields;
    fields[idx] = {
      name: obj.props.children,
      value: value
    }
    this.setState({
      fields
    })
  }

  addSelectHanderl() {
    const fields = this.state.fields;
    fields.push({
      name: '',
      value: ''
    })
    this.setState({
      fields
    })
  }

  deleteFieldHandler(idx) {
    if (idx === 0) {
      this.setState({
        fields: [
          {
            name: '',
            value: ''
          }
        ]
      })
    } else {
      const fields = this.state.fields;
      // const curr = fields[idx]
      fields.splice(idx, 1);
      this.setState({
        fields
      })
    }
    
  }

  render() {
    const self = this;
    const formItemLayout = {
      labelCol: {
        xs: { span: 0, },
        sm: { span: 6 }, // 左宽
      },
      wrapperCol: {
        xs: { span: 0 },
        sm: { span: 18 }, // 右宽
      },
    };

    console.log(` render >>> `, this.state.fields)

    return (
      <div>
        <Wrapper router={self.props.router} navs={["营销中心", "推广活动", "新建线下活动"]}>
          <Steps className="nav-steps" size="small" current={1}>
            <Step title="活动内容" />
            <Step title="报名模板" />
          </Steps>
          <div className="tempbox">
            <div className="tempbox-page">
              <div className="tempbox-page-img">报名活动主图</div>
              <div className="tempbox-page-msg">报名信息区</div>
              <div className="tempbox-page-btns">
                <Button type="primary">立即报名</Button>         
              </div>
              <div className="tempbox-page-rules">
                <span>----活动规则----</span>
              </div>
            </div>
            <div className="tempbox-form">
              <Form {...formItemLayout} >
                <Form.Item
                    label="*活动主图"
                  >
                    <a href="javascript:void(0)">添加图片</a>
                    <div className="text">
                      固定宽为300xp，不限制高度
                    </div>
                    <div className="text">
                      建议尺寸为300*600xp的jpg/png格式图片，3M以内
                    </div>
                </Form.Item>
                <Form.Item
                  label={`页面底色`}
                >
                  <div className="color-selector">
                    <span></span>
                    <a href="javascript:void(0)">自定义</a>
                  </div>
                </Form.Item>
                <Form.Item
                    label={`*报名字段`}
                  >
                    <a href="javascript:void(0)" onClick={
                      this.showModal
                    }>添加字段</a>
                </Form.Item>
                <Form.Item
                    label={`按钮文案`}
                  >
                    <Input placeholder="默认为’立即报名‘"/>
                </Form.Item>
                <Form.Item
                    label={`*按钮底色`}
                  >
                    <div className="color-selector">
                      <span></span>
                      <a href="javascript:void(0)">自定义</a>
                    </div>
                </Form.Item>
                <Form.Item
                    label={`*活动规则`}
                  >
                    <TextArea size="small" placeholder="提供给用户查看的活动规则" rows={4}></TextArea>
                    <Checkbox onChange={() => {

                    }}>隐藏不显示</Checkbox>
                    <div>将整个活动规则区域在页面上进行隐藏</div>
                </Form.Item>
              </Form>
            </div>
          </div>

          <div className="temp-btns">
            <Button type="primary">提交</Button>         
            <Button>保存</Button>
            <a href="javascipt:">取消</a>
          </div>
          <Modal
            className="popup"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Form {...formItemLayout} >
              <Form.Item
                label="*活动主图"
              >
                <a href="javascript:void(0)">添加图片</a>
              </Form.Item>
              <Form.Item
                label="*报名字段"
              >
                {
                  this.state.fields.length > 0 && this.state.fields.map((item, i) => {
                    return (
                      <div>
                        <Select size="small" value={item.value} style={{ width: 120 }} onChange={this.handleChange.bind(this.handleChange, i)}>
                          <Option value="">请选择</Option>
                          <Option value="1">姓名</Option>
                          <Option value="2">手机号</Option>
                        </Select>
                        {
                          item.value ? 
                            <Checkbox className="popup-checkbox" onChange={this.onChange}>是否必填</Checkbox>
                            : <span className="popup-spanbox"></span>
                          }
                        <Icon type="close" onClick={this.deleteFieldHandler.bind(this, i)}/>
                      </div>
                    )
                  })
                }
                <a href="javascript:void(0)" onClick={this.addSelectHanderl}>添加字段</a>
              </Form.Item>
            </Form>
          </Modal>              
        </Wrapper>
      </div>
    )
    
  }
}