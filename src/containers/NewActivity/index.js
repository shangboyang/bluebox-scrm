import React, { Component } from 'react'
import Wrapper from '@/components/Wrapper'

import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio
} from 'antd';
import { DatePicker } from 'antd';

import './style.less'
const { TextArea } = Input;

const { RangePicker } = DatePicker;
const RadioGroup = Radio.Group;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onSelectorChange(value) {
  console.log(value);
}

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];



class NewActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      //
      activityName: 1,
      activityCard: 1,
      tagShow: false,
    };
  }

  onCheckChange = (e) => {
    
    console.log(this)

    this.setState({
      tagShow: e.target.checked
    })
    // console.log(`checked = ${e.target.checked}`);
  }

  onActivityNameChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      activityName: e.target.value,
    });
  }

  onActivityCardChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      activityCard: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    
    console.log(`getFieldDecorator >>> `, getFieldDecorator)

    const formItemLayout = {
      labelCol: {
        xs: { span: 24, },
        sm: { span: 3 }, // 左宽
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }, // 右宽
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div>
        <Wrapper>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <div className={"form-basic"}>
                <h3>基本信息</h3>
                <Form.Item
                  label="活动名称"
                >
                  {getFieldDecorator('name', {
                    rules: [{
                      // type: 'email', message: 'The input is not valid E-mail!',
                    }, {
                      required: true, message: 'Please input your E-mail!',
                    }],
                  })(
                    <Input placeholder="请输入活动名称，最多20个字"/>
                  )}
                </Form.Item>
                <Form.Item
                  label="活动时间"
                >
                  {getFieldDecorator('time', {
                    rules: [{
                      required: true, message: 'Please input your E-mail!',
                    }],
                  })(
                    <div>
                      <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        placeholder={['开始时间', '结束时间']}
                        onChange={onChange}
                        onOk={onOk}
                      />
                      <div>活动结束后，用户再点击页面上的报名会提示活动已结束</div>
                    </div>
                    
                  )}
                </Form.Item>
                <Form.Item
                  label="活动介绍"
                >
                  {getFieldDecorator('intro', {
                    rules: [{
                      required: true, message: 'Please input your E-mail!',
                    }],
                  })(
                    <TextArea placeholder="仅限内部查看，最多200个字" rows={4}></TextArea>
                  )}
                </Form.Item>
              </div>
              <div className={"form-acty"}>
                <h3>活动信息</h3>
                <Form.Item
                  label="活动分类"
                >
                <div className={'form-acty-type'}>
                  <Cascader options={options} onChange={onSelectorChange} placeholder="请选择活动分类" />
                  <a className="form-link" href="javascript:void(0)">新增分类</a>
                  <a className="form-link" href="javascript:void(0)">刷新</a>
                  <div className={'tip'}>不选分类则默认进入未分类</div>
                </div>
                  
                </Form.Item>
                <Form.Item
                  label="同步打标签"
                >
                  <Checkbox onChange={this.onCheckChange}>给参与活动客户打标签</Checkbox>
                  <div className={!this.state.tagShow ?　'form-acty-tag': ''}>
                    <a href="javascript:void(0)">添加标签</a>
                    <div>
                      添加标签
                    </div>
                  </div>
                </Form.Item>
                <Form.Item
                  label="活动报名"
                >
                  {getFieldDecorator('activityName', {
                    rules: [{
                      required: true, message: 'Please input your E-mail!',
                    }],
                    initialValue: this.state.activityName
                  })(
                    <RadioGroup onChange={this.onActivityNameChange} >
                      <Radio value={1}>需要报名</Radio>
                      <Radio value={0}>不需要报名</Radio>
                    </RadioGroup>
                  )}
                </Form.Item>
                <Form.Item
                  label="活动二维码"
                >
                  {getFieldDecorator('activityCard', {
                    rules: [{
                      required: true, message: 'Please input your E-mail!',
                    }],
                    initialValue: this.state.activityCard
                  })(
                    <RadioGroup onChange={this.onActivityCardChange}>
                      <Radio value={1}>需要二维码</Radio>
                      <Radio value={0}>不需要二维码</Radio>
                    </RadioGroup>
                  )}
                </Form.Item>
              </div>
            </Form>
            <div className={'form-submit'}>
              <Button type="primary">提交</Button>         
              <Button>保存</Button>
              <a href="javascript:void(0)">取消</a>
            </div>
                    
          
        </Wrapper>
      </div>
    )
  }
}

export default Form.create({ name: 'register' })(NewActivity);

/**
 * <Form.Item
                label="Password"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input type="password" />
                )}
              </Form.Item>
              <Form.Item
                label="Confirm Password"
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: 'Please confirm your password!',
                  }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input type="password" onBlur={this.handleConfirmBlur} />
                )}
              </Form.Item>
              <Form.Item
                label={(
                  <span>
                    Nickname&nbsp;
                    <Tooltip title="What do you want others to call you?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                )}
              >
                {getFieldDecorator('nickname', {
                  rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item
                label="Habitual Residence"
              >
                {getFieldDecorator('residence', {
                  initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                  rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                })(
                  <Cascader options={residences} />
                )}
              </Form.Item>
              <Form.Item
                label="Phone Number"
              >
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Please input your phone number!' }],
                })(
                  <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                )}
              </Form.Item>
              <Form.Item
                label="Website"
              >
                {getFieldDecorator('website', {
                  rules: [{ required: true, message: 'Please input website!' }],
                })(
                  <AutoComplete
                    dataSource={websiteOptions}
                    onChange={this.handleWebsiteChange}
                    placeholder="website"
                  >
                    <Input />
                  </AutoComplete>
                )}
              </Form.Item>
              <Form.Item
                label="Captcha"
                extra="We must make sure that your are a human."
              >
                <Row gutter={8}>
                  <Col span={12}>
                    {getFieldDecorator('captcha', {
                      rules: [{ required: true, message: 'Please input the captcha you got!' }],
                    })(
                      <Input />
                    )}
                  </Col>
                  <Col span={12}>
                    <Button>Get captcha</Button>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                })(
                  <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">Register</Button>
              </Form.Item>
 * 
 */